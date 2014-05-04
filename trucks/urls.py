from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
	
   url(r'^$','trucks.views.truck'),
   url(r'^index/', 'trucks.views.index', name = 'index'),
   url(r'^truck/', 'trucks.views.truck', name='truck'),
   
)