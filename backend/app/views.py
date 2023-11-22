from django.shortcuts import render, redirect
from django_nextjs.render import render_nextjs_page_sync
from .models import User
from .forms import UserForm, LoginForm
from django.contrib.auth import authenticate, login
from django.contrib import messages


def index(request):
    return render_nextjs_page_sync(request)

def pagina_inicial(request):
    return render(request, 'pagina_inicial.html')

def login_usuario(request):
    login_form = LoginForm(request.POST or None)
    if request.method == 'POST':    
        if 'login_submit' in request.POST and login_form.is_valid():
            email = login_form['email']
            password = login_form['password']
            user = authenticate(request, email=email, password=password)    

            if user is not None:
                login(request, user)
                return redirect('pagina_inicial')
            else:
                messages.error(request, 'Credenciais inválidas. Por favor, tente novamente.')

    return render(request, 'login_usuario.html', {'login_form': login_form})

def cadastrar_usuario(request):
    user_form = UserForm(request.POST or None)
    if request.method == 'POST':
        if user_form.is_valid():
            user_form.save()
            messages.success(request, 'Cadastro realizado com sucesso. Faça login para continuar.')
            return redirect('login_usuario')

    return render(request, 'cadastrar_usuario.html', {'user_form': user_form})
