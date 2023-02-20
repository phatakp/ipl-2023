from django.urls import path

from .views import *

app_name = "predictions"

urlpatterns = [
    path("double/<int:id>/", PredictionDoubleView.as_view(), name="prediction_double"),
    path("<int:id>/", PredictionModifyView.as_view(), name="prediction_update"),
    path("", PredictionListCreateView.as_view(), name="prediction_list"),
]
