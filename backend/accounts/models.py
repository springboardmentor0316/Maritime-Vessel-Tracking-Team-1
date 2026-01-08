from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),
        ('OPERATOR', 'Operator'),
        ('ANALYST', 'Analyst'),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='OPERATOR'
    )

    def __str__(self):
        return self.username