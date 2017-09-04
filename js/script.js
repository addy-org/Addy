var geocoder;
var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var latit = 28.539923;
var longit = 77.34398759999999;
var direclat;
var direclong;

function initialize() {
  var mapOptions = {
		center: new google.maps.LatLng(28.5359744, 77.34566410000002),
		zoom: 15,
    disableDefaultUI: true,
    fullscreenControl: false,
    zoomControl: true,
    rotateControl: true,
    scaleControl: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DEFAULT,
    position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    styles: [
    {
      "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#3a3935"
            },
            {
                "saturation": 5
            },
            {
                "lightness": -57
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#b7caaa"
            },
            {
                "saturation": -14
            },
            {
                "lightness": -38
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#cbdac1"
            },
            {
                "saturation": -6
            },
            {
                "lightness": -9
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#c17118"
            },
            {
                "saturation": 61
            },
            {
                "lightness": -45
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffcb00"
            },
            {
                "saturation": 50
            },
            {
                "lightness": -46
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#8ba975"
            },
            {
                "saturation": -46
            },
            {
                "lightness": -28
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#8d9b83"
            },
            {
                "saturation": -89
            },
            {
                "lightness": -12
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#d4dad0"
            },
            {
                "saturation": -88
            },
            {
                "lightness": 54
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#bdc5b6"
            },
            {
                "saturation": -89
            },
            {
                "lightness": -3
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#bdc5b6"
            },
            {
                "saturation": -89
            },
            {
                "lightness": -26
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff2f00"
            },
            {
                "saturation": 74
            },
            {
                "lightness": -51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#00e5ff"
            },
            {
                "saturation": 34
            },
            {
                "lightness": "-69"
            },
            {
                "visibility": "on"
            }
        ]
    }
],
    streetViewControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

  map = new google.maps.Map(document.getElementById("maparea"), mapOptions);

  var input = document.getElementById('NameSearch');
  var searchBox = new google.maps.places.SearchBox(input);
  directionsDisplay = new google.maps.DirectionsRenderer();

  directionsDisplay.setMap(map);
  google.maps.event.addDomListener(document.getElementById('directions'), 'click', calcRoute);

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
}

google.maps.event.addDomListener(window, "load", initialize);

codeAddress = function () {
  initialize();
  var address = document.getElementById('NameSearch').value;
  if(address === '' )
    address = 'New Delhi, Delhi, India';

  geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      var georesult = results[0].geometry.location;
      map.setCenter(georesult);

      marker = new google.maps.Marker({
        map: map,
        position: georesult,
        draggable: true,
        animation:google.maps.Animation.DROP,
        icon: 'img/marker.png'
      });

      updateMarkerPosition(georesult);
      updateaddycode(georesult);
      geocodePosition(georesult);

      google.maps.event.addListener(marker, 'dragstart', function() {
        updateMarkerAddress('Finding');
      });
      google.maps.event.addListener(marker, 'drag', function() {
        updateMarkerPosition(marker.getPosition());
        updateaddycode(marker.getPosition());
      });
      google.maps.event.addListener(marker, 'dragend', function() {
        geocodePosition(marker.getPosition());
      });
      google.maps.event.addListener(map, 'click', function(e) {
        updateMarkerPosition(e.latLng);
        updateaddycode(e.latLng);
        geocodePosition(marker.getPosition());
        marker.setPosition(e.latLng);
        map.panTo(marker.getPosition());
      });
      marker.addListener('click', toggleBounce);
    }

    else {
      alert('Error: ' + status);
    }

  });
}

codebackconvert = function(d) {
  return parseInt(d, 36);
}

codeconvert = function(d) {
  return (+d).toString(36).toUpperCase();
}

function updateMarkerAddress(str) {
  document.getElementById('address').innerHTML = str;
}

function updateMarkerPosition(latLng) {
  document.getElementById('info').innerHTML = [
    latLng.lat(),
    latLng.lng()
  ].join(', ');
  direclat = latLng.lat();
  direclong = latLng.lng();
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  }
  else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function updateaddycode(latLng) {
  var latitude = latLng.lat();
  var longitude = latLng.lng();
  var lati = Math.round(latitude*10000)-74000;
  var long = Math.round(longitude*10000)-675000;
  if(lati<=0 || long<=0 || lati>=300000 || long>=300000) {
    document.getElementById('addycode').innerHTML = 'Region Not Supported';
  }
  else {
    var latcode = codeconvert(lati);
    var longcode = codeconvert(long);
    document.getElementById('addycode').innerHTML = [latcode,longcode].join('');
  }
}

function geocodePosition(pos) {
  geocoder.geocode({
    latLng: pos
  },
  function(responses) {
    if (responses && responses.length > 0) {
      updateMarkerAddress(responses[0].formatted_address);
    }
    else {
      updateMarkerAddress('Cannot determine address at this location.');
    }
  });
}

codeback = function() {
  var backcode = document.getElementById('BackCode').value;
  var backcode1 = backcode.substring(0,4);
  var backcode2 = backcode.substring(4,8);
  document.getElementById('NameSearch').value = [(codebackconvert(backcode1)+74000)/10000,(codebackconvert(backcode2)+675000)/10000].join(', ');
  codeAddress();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  document.getElementById('NameSearch').value = [lat,long].join(', ');
  codeAddress();
}

function getPosition(position) {
  latit = position.coords.latitude;
  longit = position.coords.longitude;
}

function calcRoute() {

  var end = new google.maps.LatLng(direclat, direclong);
  navigator.geolocation.getCurrentPosition(getPosition);
  var start = new google.maps.LatLng(latit, longit);
  //var end = new google.maps.LatLng(38.334818, -181.884886);
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      directionsDisplay.setMap(map);
    }
    else {
      alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
    }
  });
}
