Meteor.methods({
    // Adds a marker on the map by clicking on it.
    addMarker: function(latitude, longitude) {
        Markers.insert({
            lat: latitude,
            lng: longitude
        });
    },

    // Changes a marker's position by dragging it.
    dragMarker: function(markerId, latitude, longitude) {
    	Markers.update(markerId, {
    	    $set: {
    	        lat: latitude,
    	        lng: longitude
    	    }
    	});
    },

    // Removes a marker from the DB.
    removeMarker: function (markerId) {
    	Markers.remove({
    	    _id: markerId
    	})
    }
});

