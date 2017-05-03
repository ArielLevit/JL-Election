// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;
var cyborgColor = "878681";
var aquamanColor = "255da3";
var batmanColor = "2f3f2f";
var wwColor = "db6dc7";
var flashColor = "d80000";
var obamaColor = "4c150d";
var markers = [];
var ww = [
    ['main rally', 32.031, 34.861, 4],
    ['rally #1', 31.787, 34.647, 5],
    ['rally #2', 31.770, 35.189, 3],
    ['rally #3', 30.885, 34.784, 2]
];
var aquaman = [
    ['main rally', 31.031, 35.861, 4],
    ['rally #1', 32.287, 34.447, 5],
    ['rally #2', 33.370, 35.199, 3],
    ['rally #3', 31.585, 33.784, 2]
];
var cyborg = [
    ['main rally', 33.031, 35.861, 4],
    ['rally #1', 32.787, 34.747, 5],
    ['rally #2', 33.770, 35.189, 3],
    ['rally #3', 31.885, 33.784, 2]
];
var batman = [
    ['main rally', 33.031, 35.861, 4],
    ['rally #1', 32.787, 34.747, 5],
    ['rally #2', 33.770, 35.189, 3],
    ['rally #3', 31.885, 33.784, 2]
];
var flash = [
    ['main rally', 33.031, 35.861, 4],
    ['rally #1', 32.787, 34.747, 5],
    ['rally #2', 33.770, 35.189, 3],
    ['rally #3', 31.885, 33.784, 2]
];
var obama = [
    ['main rally', 33.031, 35.861, 4],
    ['rally #1', 32.797, 34.777, 5],
    ['rally #2', 33.750, 35.589, 3],
    ['rally #3', 31.845, 33.484, 2]
];

function setMarkers(hero) {
    // Loop through markers and set map to null for each
    for (var i=0; i<markers.length; i++) {
        markers[i].setMap(null);
    }
    // Reset the markers array
    markers = [];
    // Call set markers to re-add markers
    switch (hero){
        case "ww": generatePin(wwColor, ww); break;
        case "aquaman": generatePin(aquamanColor, aquaman); break;
        case "batman": generatePin(batmanColor, batman); break;
        case "flash": generatePin(flashColor, flash); break;
        case "obama": generatePin(obamaColor, obama); break;
        case "cyborg": generatePin(cyborgColor, cyborg); break;
        default: generatePin(cyborgColor, cyborg); break;
    }

}
function generatePin(color, locations) {
    var pinImg = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    for (var i = 0; i < locations.length; i++) {
        var rallies = locations[i];
        var myLatLng = new google.maps.LatLng(rallies[1], rallies[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: rallies[0],
            zIndex: rallies[3],
            icon: pinImg
        });
        // Push marker to markers array
        markers.push(marker);
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    generatePin(cyborgColor, cyborg);
    // Bind event listener on button to reload markers
    $( ".buttonMap" ).click(function() {
        var hero = $(this).attr('data-map');
        setMarkers(hero);
    });

}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    alert("Allow current location!");
    infoWindow.open(map);
}

initMap();