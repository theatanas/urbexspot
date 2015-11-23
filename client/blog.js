Template.blogPost.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var postId = FlowRouter.getParam('postId');
        self.subscribe('singlePost', postId);
    });
});


// Template helpers provide data for templates
Template.blogPost.helpers({
    post: function() {
        var postId = FlowRouter.getParam('postId');
        var post = Posts.findOne({ _id: postId }) || {};
        return post;
    },

    sidebar: function() {
        var category = FlowRouter.getParam("category");
        var cursor = Posts.find({ category: category });
        return cursor;
    }
});

Template.blogHome.helpers({
    posts: function() {
        console.log(FlowRouter.current());
        return Posts.find();
    },

    markers: function() {
        return Markers.find();
    },

    pathForPost: function() {
        var post = this;
        var params = {
            category: post.category,
            postId: post._id
        };
        var queryParams = {
            comments: "yes"
        };
        var routeName = "blogPost";
        var path = FlowRouter.path(routeName, params, queryParams);

        return path;
    }
});

// Template.onlyIfLoggedIn.helpers({
//     authInProcess: function() {
//         return Meteor.logginIn();
//     },

//     canShow: function() {
//         return ! !Meteor.user();
//     }
// })