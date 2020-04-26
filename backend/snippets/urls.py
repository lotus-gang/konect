from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers
from snippets import views

router = routers.DefaultRouter()
router.register("companies", views.CompanyView)
router.register("products", views.ProductView)
router.register("representatives", views.RepresentativeView)

unformatted_urls = [
    path('search/<str:keyword>', views.company_product_search_list)
]
unformatted_urls = format_suffix_patterns(unformatted_urls)

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns.extend(unformatted_urls)

#     # path('snippets/', views.snippet_list),
#     # path('snippets/<int:pk>', views.snippet_detail),
#     # path('companies/', views.CompanyList.as_view()),
#     path('', include(router.urls)),
#     path('companies/<int:pk>', views.CompanyDetail.as_view()),#views.company_detail),
#     path('products/', views.ProductList.as_view()),
#     path('products/<int:pk>', views.ProductDetail.as_view()),
#     path('representatives/', views.RepresentativeList.as_view()),
#     path('representatives/<int:pk>', views.RepresentativeDetail.as_view()),
#     path('products/<str:keyword>', views.company_product_search_list),
#     # path('companies/<str:keyword>', views.product_search_list),

# ]

# urlpatterns = format_suffix_patterns(urlpatterns)