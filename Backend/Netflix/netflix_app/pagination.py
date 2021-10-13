from rest_framework.pagination import PageNumberPagination

class LatestShowsPagination(PageNumberPagination):
    page_size = 12