from django.shortcuts import render, redirect
from members.forms import UsuarioForms
from members.models import Usuario
from ativos.models import Ativo

def login_user(request):
    login = UsuarioForms(request.POST or None)

    if not login.is_valid():
        return render(request, "login_user.html", {"login_template": login})

    users = Usuario.objects.all()
    # login.clean()

    email = login.data.get('email')
    senha = login.data.get('senha')

    for user in users:
        if user.email == email and user.senha == senha:
             return redirect('index')

    # print(email)
    login.add_error('email', 'Email ou senha inválida')
    return render(request, "login_user.html", {"login_template": login})

def create(request):
    login = UsuarioForms(request.POST or None)

    if login.is_valid():
        login.save()
        return redirect('login_user') #TODO: esse index redireciona para onde? para o path com name="index" na url?
    else:
        return render(request, "create.html", {"login_template": login})
    

def history(request):
    ativos = Ativo.objects.all()
    return render(request, 'history.html', {'ativos': ativos})
                                    

def configuration(request):
    return render(request, 'configuration.html')