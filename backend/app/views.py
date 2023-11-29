from django.shortcuts import render, redirect
from django_nextjs.render import render_nextjs_page_sync
from django.contrib.auth.models import User
from .models import UserBook
from .forms import UserForm, LoginForm, AddBookUserForm
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

def FetchUserBooks(id_usuario):
    try:
        livros_do_usuario = UserBook.objects.filter(idUser=id_usuario)

        return livros_do_usuario
    except UserBook.DoesNotExist:
        return None

def addBookUser(request):
    if request.user.is_authenticated:     
        if request.method == 'POST':
            form = AddBookUserForm(request.POST)
            if form.is_valid():
                livro = form.save(commit=False)
                livro.idUser = request.user.id 
                livro.save()
                return redirect('pagina_inicial')

def removeBookUser(request):
    if request.user.is_authenticated and request.method == 'POST':
        livro_id = request.POST.get('id')

        if not livro_id:
            return redirect('pagina_inicial')

        try:
            livro_para_remover = UserBook.objects.get(idUser=request.user.id, id=livro_id)
        except UserBook.DoesNotExist:
            return None


        livro_para_remover.delete()

    return redirect('pagina_inicial') 


            



