from django.shortcuts import render, redirect
from django_nextjs.render import render_nextjs_page_sync
from django.contrib.auth.models import User
from .forms import UserForm, LoginForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required


def index(request):
    return render_nextjs_page_sync(request)

def pagina_inicial(request):
    return render(request, 'pagina_inicial.html')


def logout_usuario(request):
    request.session.clear()
    logout(request)
    return redirect('pagina_inicial')

def login_usuario(request):
    login_form = LoginForm(request.POST or None)
    print("1")
    if request.method == 'POST':    
        print("2")
        if 'login_submit' in request.POST and login_form.is_valid():
            print("3")
            username = login_form.cleaned_data['username']
            password = login_form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)   

            #print(username,password) 

            if user is not None:
                print("Usuário autenticado com sucesso:", user)
                login(request, user)
                print("Usuário autenticado com sucesso:", user)
                return redirect('pagina_inicial')
                return render(request, 'pagina_inicial.html', {'user': request.user})
            else:
                print("4")
                messages.error(request, 'Credenciais inválidas. Por favor, tente novamente.')

    return render(request, 'login_usuario.html', {'login_form': login_form})

def cadastrar_usuario(request):
    user_form = UserForm(request.POST or None)
    if request.method == 'POST':
        if user_form.is_valid():
            user = User.objects.create_user(username=user_form.cleaned_data['username'],email=user_form.cleaned_data['email'],password=user_form.cleaned_data['password'])
            messages.success(request, 'Cadastro realizado com sucesso. Faça login para continuar.')
            return redirect('login_usuario')

    return render(request, 'cadastrar_usuario.html', {'user_form': user_form})
