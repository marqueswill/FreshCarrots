from django.db import models


class User(models.Model):
    username = models.CharField(max_length=30, unique=True, default=None)
    cpf = models.CharField(max_length=11, primary_key=True)
    name = models.CharField(max_length=255, default=None)
    email = models.EmailField(default=None)
    phoneNumber = models.CharField(max_length=20, default=None)
    password = models.CharField(max_length=255, default=None)
    last_login = models.DateTimeField(null=True, blank=True)
    
    def __str__(self):
        return "{} - {} - {} - {}".format(self.cpf, self.name, self.email, self.phoneNumber)

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
    cpf = models.BigIntegerField()
    availability = models.CharField(max_length=20)
    
    def __str__(self):
        return "{} - {} - {}".format(self.id, self.cpf, self.isbn)

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
    userCpf = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    bookIsbn = models.ForeignKey(Book, on_delete=models.CASCADE)
    grade = models.IntegerField()
    comment = models.TextField()
    
    def __str__(self):
        return "{} - {} - {}".format(self.idReview, self.userCpf, self.bookIsbn)


    


