import os

from django.conf import settings
from django.core.management.base import BaseCommand

file_path = settings.BASE_DIR / "templates" / "index.html"
DJANGO_LOAD_STATIC = "{% load static %}"


class Command(BaseCommand):
    help = 'Add Static files to DJANGO index.html'

    def handle(self, *args, **kwargs):
        with open(file_path, 'r+') as f:
            data = f.read()
            data = data[:15] + DJANGO_LOAD_STATIC + data[15:]
            fixed_data = self.add_django_static_to_files(data)
            f.seek(0)
            f.write(fixed_data)
            f.truncate()

    def add_django_static_to_files(self, data):
        SRC = 'src='
        HREF = 'href='
        srcpos = data.find(SRC)
        endsrc = srcpos+data[srcpos:].find(">")
        print(srcpos, endsrc)
        data = data[:srcpos+len(SRC)] + "'" + \
            '{% static "frontend-ui.js" %}' + "'" + data[endsrc:]

        hrefpos = data.find(HREF)
        endhref = hrefpos+data[hrefpos:].find(">")
        data = data[:hrefpos+len(HREF)] + "'" + \
            '{% static "frontend-ui.css" %}' + "'" + data[endhref:]

        return data
