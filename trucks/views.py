import json

from django.http import HttpResponse
from trucks.models import Truck
from trucks.forms import TruckForm
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect, HttpResponse
from django.utils.timezone import utc
from decimal import Decimal


from django.shortcuts import render
from django.http import HttpResponse

def distance(truck, latitude, longitude):
	trucklan = abs(truck.latitude)
	trucklng = abs(truck.longitude)
	distance = abs(trucklan - latitude) + abs(trucklng - longitude)

	return distance



def near_trucks(latitude, longitude, top= 10, consider = 150):
	nearest_trucks = Truck.objects.all().order_by('-created_at')[:consider]
	ranked_trucks = sorted([(distance(truck, latitude, longitude), truck) for truck in nearest_trucks])
	return [truck for _, truck in ranked_trucks][:top]

def index2(request):
	trucks = Truck.objects.all().order_by('-created_at')
	truckdata = {} 
	response_data = {}
	count = 0 
	for truck in trucks:
		count += 1
		truckdata['name'] = truck.name
		truckdata['address'] = truck.address
		truckdata['latitude'] = str(truck.latitude)
		truckdata['longitude'] = str(truck.longitude)
		truckdata['menu'] = truck.menu
		response_data[count] = truckdata
		truckdata = {}
	return HttpResponse(json.dumps(response_data), content_type="application/json")

def index(request):
	trucks = Truck.objects.all().order_by('-created_at')
	return render(request, 'trucks/index.html', {'trucks' : trucks })


def truck(request):
	if request.method == 'POST':
		address = request.POST.get('address')
		print request.POST.get('latitude')
		print request.POST.get('longitude')
		latitude = abs(Decimal(request.POST.get('latitude')))
		longitude = abs(Decimal(request.POST.get('longitude')))
		trucks = near_trucks(latitude, longitude, top = 10)
		truckdata = {} 
		response_data = {}
		count = 0 
		for truck in trucks:
			count += 1
			truckdata['name'] = truck.name
			truckdata['address'] = truck.address
			truckdata['latitude'] = str(truck.latitude)
			truckdata['longitude'] = str(truck.longitude)
			truckdata['menu'] = truck.menu
			response_data[count] = truckdata
			truckdata = {}
		return HttpResponse(json.dumps(response_data), content_type="application/json")

		#form = TruckForm(request.POST)
		#if form.is_valid():
			#truck = form.save(commit=False)
			#story.moderator = request.user
			#story.save()
		#return HttpResponseRedirect('/index/')
		#HttpResponse(json.dumps(response_data), content_type="application/json")
	else:
		form = TruckForm()
		return render(request, 'trucks/truck.html', {'form': form })	
	

	
