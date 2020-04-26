from django.db import models

class Company(models.Model):

    company_name = models.CharField(max_length = 200) # can add a verbose parameter name
    company_desc = models.CharField(max_length = 500) 
    company_address = models.CharField(max_length =500)
    company_lat = models.FloatField()
    company_long = models.FloatField()
    company_open = models.BooleanField(default=False)
    company_number = models.CharField(max_length = 15)
    company_email = models.EmailField(blank = True)
    company_logo_URL = models.URLField(blank = True)

    def __str__(self):
        return self.company_name

class Product(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    product_name = models.CharField(max_length = 200)
    product_description = models.CharField(max_length = 500)
    product_available = models.BooleanField(default=False)

    def __str__(self):
        return self.product_name


class Representative (models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    rep_name = models.CharField(max_length = 200)
    rep_username = models.CharField(max_length = 50)
    rep_password = models.CharField(max_length = 50)

    def __str__(self):
        return self.rep_name

# from pygments.lexers import get_all_lexers
# from pygments.styles import get_all_styles

# LEXERS = [item for item in get_all_lexers() if item[1]]
# LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
# STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])


# class Snippet(models.Model):
#     created = models.DateTimeField(auto_now_add=True)
#     title = models.CharField(max_length=100, blank=True, default='')
#     code = models.TextField()
#     linenos = models.BooleanField(default=False)
#     language = models.CharField(choices=LANGUAGE_CHOICES, default='python', max_length=100)
#     style = models.CharField(choices=STYLE_CHOICES, default='friendly', max_length=100)

#     class Meta:
#         ordering = ['created']