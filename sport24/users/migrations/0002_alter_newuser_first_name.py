# Generated by Django 3.2.9 on 2021-12-28 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='first_name',
            field=models.CharField(max_length=150),
        ),
    ]
