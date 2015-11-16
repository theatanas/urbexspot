Meteor.methods({
	addMarker: function(e) {
		Markers.insert({
		    lat: e.latLng.lat(),
		    lng: e.latLng.lng()
		});
	}
});