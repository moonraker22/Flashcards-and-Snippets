# Generated by Django 3.2.11 on 2022-03-31 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flashcards', '0004_alter_deck_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_frontend',
            name='id',
            field=models.IntegerField(db_index=True, primary_key=True, serialize=False),
        ),
    ]
