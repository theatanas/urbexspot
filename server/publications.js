Meteor.publish("markers", function() {
    return Markers.find();
});

Meteor.publish("posts", function() {
    return Posts.find();
});

// Meteor.publish('singlePost', function(id) {
//     check(id, String);
//     // Make a delay manually to show the loading state
//     Meteor._sleepForMs(1000);
//     return Posts.find({
//         _id: id
//     });
// });
