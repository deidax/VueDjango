from django.db import models

# Create your models here.


class Departement(models.Model):
    DepartementId = models.AutoField(primary_key=True)
    DepartementName = models.CharField(max_length=200)


class Employee(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=200)
    Departement = models.CharField(max_length=500)
    DateOfJoining = models.DateTimeField()
    PhotoFileName = models.CharField(max_length=500)
