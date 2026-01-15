import random

from django.conf import settings
from django.core.mail import send_mail
from django.utils import timezone

from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from accounts.models import User
from accounts.serializers import (
    RegisterSerializer,
    ProfileSerializer,
    ForgotPasswordSerializer,
    VerifyOTPSerializer,
)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


class ProfileView(generics.RetrieveAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user
    


class ForgotPasswordView(APIView):
    permission_classes = []

    def post(self, request):
        serializer = ForgotPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data["email"]

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {"detail": "No user registered with this email"},
                status=status.HTTP_404_NOT_FOUND
            )

        otp = str(random.randint(100000, 999999))
        user.reset_otp = otp
        user.otp_created_at = timezone.now()
        user.save()
        print("EMAIL_HOST_USER =", settings.EMAIL_HOST_USER)

        send_mail(
            subject="Password Reset OTP",
            message=f"Your OTP is {otp}. It is valid for 10 minutes.",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
            fail_silently=False,
        )

        return Response({"detail": "OTP sent to your email"})


class VerifyOTPView(APIView):
    permission_classes = []

    def post(self, request):
        serializer = VerifyOTPSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data["email"]
        otp = serializer.validated_data["otp"]
        new_password = serializer.validated_data["new_password"]

        try:
            user = User.objects.get(email=email, reset_otp=otp)
        except User.DoesNotExist:
            return Response(
                {"detail": "Invalid OTP"},
                status=status.HTTP_400_BAD_REQUEST
            )

        if timezone.now() - user.otp_created_at > timezone.timedelta(minutes=10):
            return Response(
                {"detail": "OTP expired"},
                status=status.HTTP_400_BAD_REQUEST
            )

        user.set_password(new_password)
        user.reset_otp = None
        user.otp_created_at = None
        user.save()

        return Response({"detail": "Password reset successful"})

