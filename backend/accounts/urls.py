from django.urls import path
from .views import (
    RegisterView,
    ProfileView,
    ForgotPasswordView,
    VerifyOTPView
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path("forgot-password/", ForgotPasswordView.as_view()),
    path("verify-otp/", VerifyOTPView.as_view()),
]
