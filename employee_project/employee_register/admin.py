from django.contrib import admin
from .models import Position


# Register your models here.
admin.site.site_url = 'http://localhost:8000/employee/list'
# admin.site.site_url = ''
admin.site.register(Position)
