from rest_framework import serializers
from rest_framework.generics import (ListCreateAPIView, RetrieveUpdateAPIView,
                                     UpdateAPIView)

from .models import Prediction
from .permissions import IsOwnerorAuthenticatedOnly
from .serializers import (PredictionAllInfoSerializer,
                          PredictionDoubleSerializer)


# Create your views here.
class PredictionListCreateView(ListCreateAPIView):
    model = Prediction
    serializer_class = PredictionAllInfoSerializer
    permission_classes = [IsOwnerorAuthenticatedOnly]

    def get_queryset(self):
        qs = Prediction.objects.all()
        try:
            matchNum = self.request.query_params.get("match")
            if matchNum:
                qs = qs.filter(match__num=matchNum)
                return qs
            else:
                raise ValueError
        except:
            if self.request.user.is_authenticated:
                return qs.filter(user=self.request.user)
            else:
                return []


class PredictionModifyView(RetrieveUpdateAPIView):
    model = Prediction
    serializer_class = PredictionAllInfoSerializer
    permission_classes = [IsOwnerorAuthenticatedOnly]
    lookup_field = 'id'

    def get_queryset(self):
        return Prediction.objects.filter(user=self.request.user)


class PredictionDoubleView(UpdateAPIView):
    model = Prediction
    serializer_class = PredictionDoubleSerializer
    permission_classes = [IsOwnerorAuthenticatedOnly]
    lookup_field = 'id'

    def get_queryset(self):
        return Prediction.objects.filter(user=self.request.user)
