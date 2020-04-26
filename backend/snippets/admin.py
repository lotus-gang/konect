from django.contrib import admin

from .models import Company, Product, Representative

admin.site.register(Company)
admin.site.register(Product)
admin.site.register(Representative)