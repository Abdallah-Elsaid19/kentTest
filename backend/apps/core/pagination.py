from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class KBCPageNumberPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = "perPage"
    max_page_size = 100

    def get_paginated_response(self, data):
        return Response(
            {
                "items": data,
                "pagination": {
                    "page": self.page.number,
                    "per_page": self.get_page_size(self.request),
                    "total_items": self.page.paginator.count,
                    "total_pages": self.page.paginator.num_pages,
                },
            }
        )
