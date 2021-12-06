# Generated by Django 3.2.9 on 2021-12-06 16:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import sport24app.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('article_id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=200)),
                ('date_of_create', models.DateTimeField()),
                ('date_of_last_change', models.DateTimeField(blank=True, null=True)),
                ('lead_text', models.TextField()),
                ('text', models.TextField()),
                ('big_title_photo', models.ImageField(blank=True, default='media/ludzik.png', null=True, upload_to=sport24app.models.upload_to_articles, verbose_name='Image')),
                ('page_views', models.IntegerField(blank=True, default=0)),
                ('comments_number', models.IntegerField(blank=True, default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Discipline',
            fields=[
                ('discipline_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('icon', models.ImageField(blank=True, default='media/ludzik.png', null=True, upload_to=sport24app.models.upload_to_disciplines, verbose_name='Image')),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('game_id', models.AutoField(primary_key=True, serialize=False)),
                ('db_game_id', models.IntegerField()),
                ('name', models.CharField(max_length=100)),
                ('logo', models.ImageField(blank=True, default='media/ludzik.png', null=True, upload_to=sport24app.models.upload_to_games, verbose_name='Image')),
                ('discipline_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='sport24app.discipline')),
            ],
        ),
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('quote_id', models.AutoField(primary_key=True, serialize=False)),
                ('quote', models.TextField(null=True)),
                ('description', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Section',
            fields=[
                ('section_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('number_of_articles', models.IntegerField(blank=True, default=0)),
                ('icon', models.ImageField(blank=True, default='media/ludzik.png', null=True, upload_to=sport24app.models.upload_to_sections, verbose_name='Image')),
                ('moderator_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Season',
            fields=[
                ('season_id', models.AutoField(primary_key=True, serialize=False)),
                ('season', models.CharField(max_length=10)),
                ('phase', models.CharField(max_length=20)),
                ('round', models.CharField(max_length=20)),
                ('game_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='sport24app.game')),
            ],
        ),
        migrations.CreateModel(
            name='Match',
            fields=[
                ('match_id', models.AutoField(primary_key=True, serialize=False)),
                ('match_date', models.DateTimeField()),
                ('host', models.CharField(max_length=30)),
                ('guest', models.CharField(max_length=30)),
                ('score', models.CharField(max_length=10)),
                ('season_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='sport24app.season')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('comment_id', models.AutoField(primary_key=True, serialize=False)),
                ('date_of_create', models.DateTimeField()),
                ('date_of_last_change', models.DateTimeField(blank=True, null=True)),
                ('text', models.TextField()),
                ('article_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='sport24app.article')),
                ('author_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='article',
            name='section_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='sport24app.section'),
        ),
    ]
