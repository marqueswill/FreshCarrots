from django.urls import path
from .views import index
from .views import login_usuario, cadastrar_usuario,logout_usuario, pagina_inicial

urlpatterns = [
    path("", index, name="index"),
    path('pagina_inicial/', pagina_inicial, name='pagina_inicial'),
    path('cadastrar_usuario/', cadastrar_usuario, name='cadastrar_usuario'),
    path('login_usuario/', login_usuario, name='login_usuario'),
    path('logout_usuario/', logout_usuario, name='logout_usuario'),
    
]
