$(document).ready(function(){

	// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function codeAddress(address) {
      console.log(address);
      var location = [] 
      geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          var lat = results[0].geometry.location.lat();
          var lng  = results[0].geometry.location.lng();
          console.log(lat);
          console.log(lng);
          //getTrucks(address, lat, lng);
         

  
        } else {
          console.log("something not right")
        }

      });
      console.log(location);
      return location;
}

function getTrucks(address, lat, lng){
   $.ajax({
        type: "POST",
        url:"/truck/",
        data: {
        "address" : address,
        "latitude" : lat,
        "longitude" : lng
      },
    success: function(response) {
          $('#textinput').val('');
          console.log( "in data:", response );
    },
    headers: {
      'X-CSRFToken': csrftoken
    }})
  .done(function( data ) {
    if ( console && console.log ) {
      console.log( "Sample of data:", data );
    }
  });
  return false;
  }





 $("form.address").submit(function() {
      
        var ad = $('#textinput').val();

        console.log(ad);

        var locations = codeAddress(ad);
        console.log(locations);
        var lat = locations[0];
        var lng = locations[1];
        getTrucks(address, lat, lng)

      
      
    })




})