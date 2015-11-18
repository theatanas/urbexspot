/*
Take this route: /blog/kadira/getting-started?comments=show

Then, the "action: function(params, queryParams) {}" will be:

params = {category: "kadira", postId: "getting-started"};
queryParams = {comments: "show"}
*/

FlowRouter.route('/blog/:postId', {
    action: function(params, queryParams) {
        console.log("This is a blog post: " + params.postId);
    },
    name: 'blogPost'
});

// Admin Group
var adminSection = FlowRouter.group({
    prefix: "/admin"
});

// for the /admin page
adminSection.route('/', {
    action: function() {
        console.log("Admin Route");
    }
});

// for the /admin/new-post page
adminSection.route('/show-all-users', {
    action: function() {
        console.log("Show all users to the admin!");
    }
});



// Blog
FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "blogHome"
        });
    }
});

FlowRouter.route('/:postId', {
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "blogPost"
        });
    }
});
