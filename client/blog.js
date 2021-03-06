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
    }
});

Template.blogHome.helpers({
    posts: function() {
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
