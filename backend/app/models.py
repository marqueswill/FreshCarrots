from django.db import models
from django.contrib.auth.models import User


class Book(models.Model):
    isbn = models.BigIntegerField(primary_key=True)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    language = models.CharField(max_length=50)
    edition = models.IntegerField()
    year = models.DateField()
    category = models.CharField(max_length=100)
    thumbnail = models.BinaryField(null=True)
    grade = models.IntegerField(null=True)
    
    def __str__(self):
        return "{} - {}".format(self.isbn, self.title)

class UserBook(models.Model):
    id = models.BigIntegerField(primary_key=True)
    isbn = models.BigIntegerField()
    idUser = models.CharField()
    availability = models.CharField(max_length=20)
    
    def __str__(self):
        return "{} - {} - {}".format(self.id, self.idUser, self.isbn)

class Loan(models.Model):
    idLoan = models.IntegerField(primary_key=True)
    time = models.IntegerField()
    start = models.DateField()
    end = models.DateField()
    state = models.CharField(max_length=50)
    lender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='loans_as_lender')
    borrower = models.ForeignKey(User, on_delete=models.CASCADE, related_name='loans_as_borrower')
    bookIsbn = models.ForeignKey(Book, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.idLoan)

class Review(models.Model):
    idReview = models.IntegerField(primary_key=True)
    idUser = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    bookIsbn = models.ForeignKey(Book, on_delete=models.CASCADE)
    grade = models.IntegerField()
    comment = models.TextField()
    
    def __str__(self):
        return "{} - {} - {}".format(self.idReview, self.idUser, self.bookIsbn)


    


