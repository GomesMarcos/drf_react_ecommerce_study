from rest_framework.decorators import api_view
from rest_framework.response import Response

from .products import products

# Create your views here.


@api_view(['GET'])
def get_routes(request):
    routes = [
        '/api/products',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/reviews/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<uodate>/<id>/',
    ]
    return Response(routes)


@api_view(['GET'])
def get_products(request):
    return Response(products)


@api_view(['GET'])
def get_product_by_id(request, pk):
    """
    Returns a single product info that has ID equals to

    Args:
        request ([type]): [description]
        pk (str): Product's id

    Returns:
        list: List with a single dict that contains Product's Infos
    """
    product = filter(lambda item: item['_id'] == pk, products)
    return Response(product)
