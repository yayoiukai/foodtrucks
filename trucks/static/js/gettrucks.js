

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

function displayData(data){
    console.log("this",data);
    for (var key in data) {
        var truck = data[key];
        var address = truck.address;
        var name = truck.name;
        var menu = truck.menu;
        
        result = "<div id=" + key +"><h5>" + key + ". " + name + "</h5>";
        result = result + "<p>" + address + "</p>";
        result = result + "<p> Menu: " + menu + "</p></div>";
        $( "div#"+key ).replaceWith(result);
    }
  
    
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
          console.log( "in data:", response );
          placeMarkers(response);
          displayData(response);
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


  





 



