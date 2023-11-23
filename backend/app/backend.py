from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from app.models import User


class MeuUsuarioBackend(ModelBackend):
    def authenticate(self, request, email=None, password=None, **kwargs):
        try:
            usuario = User.objects.get(email=email)
            if usuario.password == password:
                return usuario
        except User.DoesNotExist:
            return None