# Generated by Django 4.1.5 on 2023-02-06 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('predictions', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prediction',
            name='result',
            field=models.FloatField(default=0, max_length=6),
        ),
    ]