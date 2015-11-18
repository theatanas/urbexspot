function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Meteor.startup(function() {
//     if (Posts.find().count() === 0) {
//         _(5).times(function(n) {
//             Posts.insert({
//                 title: 'Title ' + n,
//                 body: 'Content body ' + n,
//                 createdAt: randomDate(new Date(2015, 0, 1), new Date())
//             });
//         });
//     }
// });
