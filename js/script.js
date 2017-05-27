function mobileNav() {
    var el = document.getElementById('dropdown');

    if(el.style.display == "none") {
        el.style.display="block";
    }
    else {
        el.style.display="none";
    }
}



// global var googlemaps
var googlemaps;

// initializing
google.maps.event.addDomListener(window, 'load', initMaps);

function initMaps() {

    // declaration
    var divMap = document.getElementById('divMap');
    var myLatLng = {lat: 50.825807, lng: 3.236954};

    // settings
    var mapOptions = {
        zoom: 14,
        center: myLatLng,
        disableDefaultUI: true
    };

    googlemaps = new google.maps.Map(divMap, mapOptions);

    // loading JSON
    fetchJSONFile('https://api.myjson.com/bins/1dgu51', function(styles){
        googlemaps.setOptions({
            styles: styles
        })
    });
}

function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

/*
// global var googlemaps
var googlemaps;

// initializing
google.maps.event.addDomListener(window, 'load', initMaps);

function initMaps() {

    // declaration
    var myLatLng = {lat: 50.825807, lng: 3.236954};

    // settings
    var map = new google.maps.Map(document.getElementById('divMap'), {
        zoom: 14,
        center: myLatLng,
        disableDefaultUI: true
    });
    
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World'
    });

    // loading JSON
    fetchJSONFile('https://api.myjson.com/bins/1dgu51', function(styles){
        googlemaps.setOptions({
            styles: styles
        })
    });
}

function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}
*/