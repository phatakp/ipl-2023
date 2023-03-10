# Generated by Django 4.1.5 on 2023-02-14 09:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('teams', '0002_team_active'),
    ]

    operations = [
        migrations.CreateModel(
            name='MatchHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('type', models.CharField(choices=[('league', 'League'), ('knockout', 'Knockout')], default='league', max_length=20)),
                ('status', models.CharField(choices=[('completed', 'Completed'), ('abandoned', 'Abandoned')], default='completed', max_length=20)),
                ('t1score', models.JSONField(blank=True, null=True)),
                ('t2score', models.JSONField(blank=True, null=True)),
                ('bat_first', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bat_first', to='teams.team')),
                ('team1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='homeHistory', to='teams.team')),
                ('team2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='awayHistory', to='teams.team')),
                ('winner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='winnerHistory', to='teams.team')),
            ],
            options={
                'ordering': ('date',),
            },
        ),
        migrations.CreateModel(
            name='TeamStats',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('all', 'All'), ('home', 'Home'), ('away', 'Away'), ('knockout', 'Knockout'), ('last10', 'Last10')], default='all', max_length=20)),
                ('stats', models.JSONField(blank=True, null=True)),
                ('team1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='homeStats', to='teams.team')),
                ('team2', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='awayStats', to='teams.team')),
            ],
            options={
                'verbose_name_plural': 'TeamStats',
                'unique_together': {('team1', 'team2', 'type')},
            },
        ),
    ]
