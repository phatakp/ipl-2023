from ._base import *

try:
    from .local import *
    print('Dev Settings')
except ImportError:
    print('Prod settings')
    INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

    ALLOWED_HOSTS = []
    CORS_ALLOWED_ORIGINS = [
    ]