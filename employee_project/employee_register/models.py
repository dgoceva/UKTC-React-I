from django.db import models

# Create your models here.


class Positon(models.Model):
    title = models.CharField(max_length=50)


class Employee(models.Model):
    fullname = models.CharField(max_length=100)
    emp_code = models.CharField(max_length=3)
    mobile = models.CharField(max_length=15)
    position = models.ForeignKey(Positon, on_delete=models.CASCADE)
