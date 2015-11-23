/****************
**
** Admin Group
**
****************/
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

/****************
**
** Root
**
****************/
FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("baseLayout", { content: "map" });
    }
});

/****************
**
** Blog
**
****************/
FlowRouter.route('/blog', {
    action: function() {
        BlazeLayout.render("blogLayout", { content: "blogHome" });
    }
});

FlowRouter.route('/blog/:category/:postId', {
    name: "blogPost",
    action: function() {
        BlazeLayout.render("blogLayout", { content: "blogPost" });
    }
});
