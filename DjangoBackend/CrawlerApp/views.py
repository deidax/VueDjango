from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from CrawlerApp.models import Departement, Employee
from CrawlerApp.serializers import DepartementSerializer, EmployeeSerializer
# Create your views here.

@csrf_exempt
def departementApi(request, id=0):
    if request.method == 'GET':
        departements = Departement.objects.all()
        departement_serializer = DepartementSerializer(departements, many=True)
        return JsonResponse(departement_serializer.data, safe=False)
    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        department_serializer = DepartementSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department = Departement.objects.get(DepartementId=department_data['DepartementId'])
        department_serializer=DepartementSerializer(department,data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated successfully", safe=False)
        return JsonResponse("Fialed to update", safe=False)
    elif request.method=='DELETE':
        department = Departement.objects.get(DepartementId=id)
        department.delete()
        return JsonResponse("Deleted successfully", safe=False)
