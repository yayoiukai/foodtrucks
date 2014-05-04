from django.forms import ModelForm
from trucks.models import Truck

class TruckForm(ModelForm):
	class Meta:
		model = Truck
		exclude = ('name','category', 'menu')