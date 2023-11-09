from django.db import models


class User(models.Model):
    cpf = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phoneNumber = models.CharField(max_length= 45)
    password = models.CharField(max_length=45)

class Book(models.Model):
    isbn = models.BigIntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    edition = models.IntegerField()
    year = models.DateField()
    category = models.CharField(max_length=45)
    thumbnail = models.BinaryField(null=True)
    grade = models.IntegerField()

class Loan(models.Model):
    idLoan = models.IntegerField(primary_key=True)
    time = models.models.IntegerField()
    start = models.DateField()
    end = models.DateField()
    state = models.CharField()
    lender = models.ForeignKey(User, related_name='loan_lender')
    borrower = models.ForeignKey(User, related_name='loan_borrower')
    bookIsbn = models.ForeignKey(Book, related_name='loan_book_isnb')

class Review(models.Model):
    idReview = models.IntegerField(primary_key=True)
    userCpf = models.ForeignKey(User, related_name='review_user')
    bookIsbn = models.ForeignKey(Book, related_name='review_book')
    grade = models.IntegerField()
    coment = models.TextField()
