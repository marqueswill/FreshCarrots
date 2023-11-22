from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

class MeuUsuarioBackend(ModelBackend):
    def authenticate(self, request, email=None, password=None, **kwargs):
        User = get_user_model()

        try:
            # Busca o usuário na tabela padrão
            user = User.objects.get(email=email)
            
        except User.DoesNotExist:
            return None

        if user.check_password(password) and self.user_can_authenticate(user):
            return user

    def get_user(self, user_id):
        User = get_user_model()

        try:
            # Busca o usuário na tabela padrão
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None