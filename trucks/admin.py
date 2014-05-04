from django.contrib import admin

from trucks.models import Truck

class TruckAdmin(admin.ModelAdmin):
	list_display = ('__unicode__', 'address', 'latitude', 'longitude','category','menu','created_at', 'updated_at')
	list_filter = ('created_at','updated_at')
	search_fields = ('name','address','latitude', 'longitude','category')

	#fields = ('title', 'url', 'created_at', 'updated_at')
	

	fieldsets = [
		('Truck', {
				'fields' : ('name', 'address', 'latitude', 'longitude','category','menu')
			}),
		('Change History', {
			'classes' :('collapse',),
			'fields' : ('created_at','updated_at')
			})
	]
	readonly_fields = ('created_at', 'updated_at')

admin.site.register(Truck, TruckAdmin)
