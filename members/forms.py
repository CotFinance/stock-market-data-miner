from django.forms import ModelForm
from members.models import Usuario 
from django import forms

class UsuarioForms(ModelForm):
    class Meta:
        model= Usuario
        fields= ['email', 'senha']
        widgets = {
            'senha': forms.PasswordInput(),  # ocultar a senha
    }



