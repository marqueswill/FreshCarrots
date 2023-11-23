from django.urls import path
from .views import index
from .views import login_usuario, cadastrar_usuario, pagina_inicial
from .views import fazer_logout

urlpatterns = [
    path("", index, name="index"),
    path('pagina_inicial/', pagina_inicial, name='pagina_inicial'),
    path('cadastrar_usuario/', cadastrar_usuario, name='cadastrar_usuario'),
    path('login_usuario/', login_usuario, name='login_usuario'),
    path('logout/', fazer_logout, name='fazer_logout'),
    
]
