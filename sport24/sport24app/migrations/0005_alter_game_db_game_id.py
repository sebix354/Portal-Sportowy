# Generated by Django 3.2.9 on 2022-01-11 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sport24app', '0004_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='db_game_id',
            field=models.IntegerField(unique=True),
        ),
    ]
