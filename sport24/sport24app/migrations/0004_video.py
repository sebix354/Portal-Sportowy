# Generated by Django 3.2.9 on 2022-01-10 10:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sport24app', '0003_delete_video'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('video_id', models.AutoField(primary_key=True, serialize=False)),
                ('url', models.TextField(null=True)),
            ],
        ),
    ]
