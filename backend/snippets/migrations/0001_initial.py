# Generated by Django 3.0.4 on 2020-04-24 15:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=200)),
                ('company_address', models.CharField(max_length=500)),
                ('company_open', models.BooleanField(default=False)),
                ('company_number', models.CharField(default=None, max_length=15)),
                ('company_email', models.EmailField(blank=True, default=None, max_length=254)),
                ('company_logo_URL', models.URLField(default=None)),
            ],
        ),
        migrations.CreateModel(
            name='CompanyRepresentative',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rep_name', models.CharField(max_length=200)),
                ('rep_username', models.CharField(max_length=50)),
                ('rep_password', models.CharField(max_length=50)),
                ('company_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='snippets.Company')),
            ],
        ),
        migrations.CreateModel(
            name='CompanyProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=200)),
                ('product_description', models.CharField(max_length=500)),
                ('product_available', models.BooleanField(default=False)),
                ('company_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='snippets.Company')),
            ],
        ),
    ]
