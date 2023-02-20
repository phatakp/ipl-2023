
from django.db.models import Q
from rest_framework import generics, permissions

from .models import MatchHistory, TeamStats
from .serializers import MatchHistorySerializer, TeamStatsSerializer

# Create your views here.


class TeamStatsListView(generics.ListAPIView):
    model = TeamStats
    permission_classes = [permissions.AllowAny]
    serializer_class = TeamStatsSerializer

    def get_queryset(self):
        return TeamStats.objects \
            .filter(
                Q(team1__shortname=self.kwargs.get('team1'), team2__shortname=self.kwargs.get('team2')) |
                Q(team1__shortname=self.kwargs.get('team1'), team2__isnull=True) |
                Q(team1__shortname=self.kwargs.get('team2'), team2__shortname=self.kwargs.get('team1')) |
                Q(team1__shortname=self.kwargs.get('team2'), team2__isnull=True))


class MatchHistoryListView(generics.ListAPIView):
    model = MatchHistory
    permission_classes = [permissions.AllowAny]
    serializer_class = MatchHistorySerializer

    def get_queryset(self):
        return MatchHistory.objects \
            .filter(
                Q(team1__shortname=self.kwargs.get('team1'), team2__shortname=self.kwargs.get('team2')) |
                Q(team1__shortname=self.kwargs.get('team2'), team2__shortname=self.kwargs.get('team1'))).order_by('-date')[:5]
