from config.settings.base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'f+%@@f32u#eaj2t=&jy$%p(s4z*j@6mb_7okyu5=&2v(f0%(d='

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
