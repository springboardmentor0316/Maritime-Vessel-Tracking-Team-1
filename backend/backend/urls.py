from django.contrib import admin
from django.urls import path, include
from accounts.jwt_views import EmailTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/accounts/', include('accounts.urls')),

    path('api/token/', EmailTokenObtainPairView.as_view()),

    path('api/token/refresh/', TokenRefreshView.as_view()),
]