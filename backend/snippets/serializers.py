from rest_framework import serializers
from snippets.models import Company, Product, Representative

class CompanySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Company
        depth = 1
        fields = ['id','url','company_name', 'company_desc','company_address','company_lat', 'company_long','company_open', 'company_number','company_email','company_logo_URL']

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Product
        # depth = 1
        fields = '__all__'

class RepresentativeSerializer(serializers.HyperlinkedModelSerializer):
    # company = serializers.HyperlinkedRelatedField(many=False, view_name='company-detail', read_only=True)
    company = CompanySerializer

    class Meta:
        model = Representative
        fields = ['id', 'url','company', 'rep_name', 'rep_username', 'rep_password']

class ProductSearchSerializer(serializers.HyperlinkedModelSerializer):

    products = serializers.SerializerMethodField('get_all_products')

    class Meta:
        model = Company
        depth = 1
        fields = ['id','url','company_name', 'company_desc','company_address', 'products','company_lat', 'company_long','company_open', 'company_number','company_email','company_logo_URL']

    def get_all_products (self, company):
        products = Company.objects.get(id=company.id).product_set.all().values()
        # print (products)
        return products

# class ProductSearchSerializer (serializers.HyperlinkedModelSerializer):
    
#     company_name = serializers.SerializerMethodField('get_company_name')
    
#     class Meta:
#         model = Product
#         fields = ['id','product_name','product_description','product_available', 'company_name'] #'__all__'

#     def get_company_name (self, product):
#         company_name = product.company.company_name
#         return company_name
