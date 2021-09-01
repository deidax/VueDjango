from django.conf.urls import url
from CrawlerApp import views

urlpatterns = [
    url(r'^departement$', views.departementApi),
    url(r'^departement/([0-9]+)$', views.departementApi)
]