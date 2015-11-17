Meteor.methods({
    addMarker: function(latitude, longitude) {
        Markers.insert({
            lat: latitude,
            lng: longitude
        });
    }
});