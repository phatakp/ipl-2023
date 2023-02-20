from django.urls import path

from . import views

app_name = 'stats'

urlpatterns = [
    path('history/<str:team1>/<str:team2>/',
         views.MatchHistoryListView.as_view()),
    path('<str:team1>/<str:team2>/', views.TeamStatsListView.as_view()),
]
