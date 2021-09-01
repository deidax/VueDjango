from rest_framework import serializers
from CrawlerApp.models import Employee, Departement

class DepartementSerializer(serializers.ModelSerializer):
    class Meta:
        model=Departement
        fields=('DepartementId','DepartementName')
    
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields=('EmployeeId', 'EmployeeName', 'Departement', 'DateOfJoining', 'PhotoFileName')
