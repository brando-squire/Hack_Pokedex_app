# Generated by Django 2.1.1 on 2018-11-17 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='pokemon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pokeName', models.CharField(max_length=20)),
                ('pokeType1', models.CharField(max_length=20)),
                ('pokeType2', models.CharField(max_length=20)),
            ],
        ),
    ]