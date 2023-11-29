from django import forms
from django.contrib.auth.models import User
from .models import UserBook

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)

class AddBookUserForm(forms.ModelForm):
    class Meta:
        model = UserBook
        fields = ['isbn', 'availability']