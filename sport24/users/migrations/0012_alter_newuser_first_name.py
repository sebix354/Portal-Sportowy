# Generated by Django 3.2.9 on 2022-01-11 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_alter_newuser_user_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='first_name',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
