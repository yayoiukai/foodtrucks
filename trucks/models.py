from django.db import models

class Truck(models.Model):
	name = models.CharField(max_length=200)
	address = models.CharField(max_length=200)
	latitude = models.FloatField(default = 0)
	longitude = models.FloatField(default = 0)
	category = models.CharField(max_length=200)
	menu = models.TextField()
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

	def __unicode__(self):
		return self.name




