
var geocoder;
var map;
var lat;
var lng;
var trucks;
var markers = []; 

function initialize() {
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(37.7901490737255,-122.398658184604);
      var mapOptions = {
        zoom: 15,
        center: latlng
      }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  marker = new google.maps.Marker({
            position: latlng,
            map: map,
           
  });

}

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
      lat = results[0].geometry.location.lat();
      lon = results[0].geometry.location.lng();
      getTrucks(address, lat, lon)
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}



function placeMarkers(data){
  alert("Hello World");
  console.log(data);
  if (markers.length > 0){
    for (i = 0; i < 10 ; i++){
      markers[i].setMap(null);
    }
    markers = [];
  } 
  for (var key in data) {

            var truck = data[key];
            lat = truck.latitude;
            console.log(lat);
            lon = truck.longitude;
            console.log(lon);
            var latlng = new google.maps.LatLng(lat,lon);

            var pinColor = "FFFF00";
            var pinText = key;
            var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=" + key + "|" + pinColor,
            new google.maps.Size(21, 34),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));
            
            var marker = new google.maps.Marker({
              position: latlng,
              map: map,
              icon : pinImage,
           });
            markers.push(marker);
            marker.setMap(map);
    }
}



google.maps.event.addDomListener(window, 'load', initialize);