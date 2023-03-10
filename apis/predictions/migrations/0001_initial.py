# Generated by Django 4.1.5 on 2023-02-02 11:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('teams', '0002_team_active'),
        ('matches', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Prediction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.PositiveSmallIntegerField(default=50)),
                ('result', models.FloatField(default=0)),
                ('status', models.CharField(choices=[('placed', 'Placed'), ('default', 'Default'), ('won', 'Won'), ('lost', 'Lost'), ('no-result', 'No-result')], db_index=True, default='placed', max_length=10)),
                ('create_upd_time', models.DateTimeField(auto_now=True)),
                ('double', models.BooleanField(default=False)),
                ('updated', models.BooleanField(db_index=True, default=False)),
                ('match', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='match_predictions', to='matches.match')),
                ('team', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='team_predictions', to='teams.team')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_predictions', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('match', 'create_upd_time'),
                'unique_together': {('match', 'user')},
            },
        ),
    ]
