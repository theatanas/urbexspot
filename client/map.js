Meteor.startup(function() {
    GoogleMaps.load();
});

Template.map.onCreated(function() {
    GoogleMaps.ready('map', function(map) {

        google.maps.event.addListener(map.instance, 'click', function(event) {
        	var lat = event.latLng.lat();
        	var lon = event.latLng.lng();
            Meteor.call("addMarker", lat, lon);
            console.log("Marker added. x: " + lat + ", y: " + lon);
        });




        var markers = {};

        // Make sure to subscribe before using cursor.find().observe();
        Markers.find().observe({

            added: function(document) {
                // Create a marker for this document
                var marker = new google.maps.Marker({
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(document.lat, document.lng),
                    map: map.instance,
                    // We store the document _id on the marker in order 
                    // to update the document within the 'dragend' event below.
                    id: document._id
                });

                // Right Click - remove marker
                google.maps.event.addListener(marker, "rightclick", function(event) {
                    
                    // Convert the markers to an array
                    var markersArray = Object.keys(markers).map(function (key) {return markers[key]});
                    markersArray.map(function(mark) {
                        var markerId = mark.id;
                        var markerLat = mark.position.lat();
                        var markerLng = mark.position.lng();
                        var eventLat = event.latLng.lat();
                        var eventLng = event.latLng.lng();

                        if (markerLat == eventLat && markerLng == eventLng) {
                            Meteor.call("removeMarker", markerId);
                            marker.setMap(null);
                        }
                    });
                 });

                // Drag - this lets us drag markers around the map and update their corresponding document.
                google.maps.event.addListener(marker, 'dragend', function(event) {
                    Meteor.call("dragMarker", marker.id, event.latLng.lat(), event.latLng.lng());
                });

                // Store this marker instance within the markers object.
                markers[document._id] = marker;
            },

            changed: function(newDocument, oldDocument) {
                markers[newDocument._id].setPosition({
                    lat: newDocument.lat,
                    lng: newDocument.lng
                });
            },

            removed: function(oldDocument) {
                // Remove the marker from the map
                markers[oldDocument._id].setMap(null);

                // Clear the event listener
                google.maps.event.clearInstanceListeners(
                    markers[oldDocument._id]);

                // Remove the reference to this marker instance
                delete markers[oldDocument._id];
            }
        });
    });
});

Template.map.helpers({
    geolocationError: function() {
        var error = Geolocation.error();
        return error && error.message;
    },

    mapOptions: function() {
        var latLng = Geolocation.latLng();
        // Notice the "&& latLng" part below.
        if (GoogleMaps.loaded() && latLng) {
            return {
                center: new google.maps.LatLng(latLng.lat, latLng.lng),
                zoom: MAP_ZOOM
            };
        }
    }
});