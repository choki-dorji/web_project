from. import views
from django.urls import path, include 
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register("register", views.newprescription)

urlpatterns = [
    path('project/', views.getProjectDetail.as_view()),
    path('new/', include(router.urls)),
     path('search/', views.search.as_view()),

]
