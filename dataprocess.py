import json
import sqlite3

import datetime 

import time
ts = time.time()
st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
print st


conn = sqlite3.connect('ft.db')
c = conn.cursor()





# Save (commit) the changes
conn.commit()






with open("rows.json") as json_file:
	json_data = json.load(json_file)
	newdic = dict(json_data)
	#print json_data
	print newdic.keys()
	values = newdic['data']
	menues = {}
	locations = {} 
	names = set()
	counter = 0
	count = 0 
	popular = {}
	idnum = 3
	for item in values:
		name = item[9]
		name = name.replace(",","")
		name = name.replace(".","")
		if name not in names:
			counter += 1
			names.add(name)
			address = item[13]
			lan = item[22]
			lon = item[23]
			location = {}
			location['address'] = address
			location['lan'] = lan
			location['lon'] = lon
			locations[name] = location
			menu = item[19]
			location['menu'] = menu

			# Insert a row of data
			#category = ""
			

			

			if menu:
				menu = menu.split(": ")
				for food in menu:
					if food not in menues.keys():
						trucks = []
						trucks.append(name)
						menues[food] = trucks
						count += 1
					else:
						menues[food].append(name)

			category = "American"
			menu = ','.join(menu)
			category = '"' + category + '"'
			name = '"' + name + '"'
			address = '"' + address + '"'
			menu = '"' + menu + '"'
			sta = '"' + st + '"'
			if lan == None:
				lan = 0
			if lon == None:
				lon = 0
			print name
			print menu 
			query = "INSERT INTO trucks_truck VALUES ({0},{1},{2},{3},{4},{5},{6},{7},{8})".format(idnum, name,address,lan,lon,category, menu, sta, sta)
			print query
			c.execute(query)
			conn.commit()
			idnum += 1

	for food in menues.keys():
		if menues[food]  > 5:
			popular[food] = menues[food]

	with open('locations.json', 'w') as outfile:
  		json.dump(locations, outfile)





		

	print names
	#print counter
	#print menu
	#print menues
	#print count
	#print popular
	#print locations
	print values[2]

conn.close()
	



