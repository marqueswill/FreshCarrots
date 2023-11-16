from django.db import models


class User(models.Model):
    cpf = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phoneNumber = models.CharField(max_length= 45)
    password = models.CharField(max_length=45)
    def __str__(self):
        return str(self.cpf, self.nome, self.email, self.phoneNuber)

class Book(models.Model):
    isbn = models.BigIntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    author = models.CharField(max_lenght=100)
    language = models.CharField(max_lenght=45)
    edition = models.IntegerField()
    year = models.DateField()
    category = models.CharField(max_length=45)
    thumbnail = models.BinaryField(null=True)
    grade = models.IntegerField()
    def __str__(self):
        return str(self.isbn, self.title)
    
class userBook(models.Model):
    id = models.BigIntegerField(primary_key=True)
    isbn = models.BigIntegerField()
    cpf = models.BigIntegerField()
    availability = models.CharField(max_length=45)
    def __str__(self):
        return str(self.id, self.cpf, self.isbn)

class Loan(models.Model):
    idLoan = models.IntegerField(primary_key=True)
    time = models.models.IntegerField()
    start = models.DateField()
    end = models.DateField()
    state = models.CharField()
    lender = models.ForeignKey(User, related_name='loan_lender')
    borrower = models.ForeignKey(User, related_name='loan_borrower')
    bookIsbn = models.ForeignKey(Book, related_name='loan_book_isnb')
    def __str__(self):
        return str(self.idLoan)

class Review(models.Model):
    idReview = models.IntegerField(primary_key=True)
    userCpf = models.ForeignKey(User, related_name='review_user')
    bookIsbn = models.ForeignKey(Book, related_name='review_book')
    grade = models.IntegerField()
    coment = models.TextField() 
    def __str__(self):
        return str(self.idReview, self.userCpf, self.bookIsbn)



