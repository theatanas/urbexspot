/****************
**
** Admin Routes Section
**
****************/
var adminSection = FlowRouter.group({
    prefix: "/admin"
});

// for the /admin page
adminSection.route('/', {
    name: "adminRoot",
    action: function() {
        console.log("Admin Route");
    }
});

// for the /admin/new-post page
adminSection.route('/show-all-users', {
    name: "adminShowAllUsers",
    action: function() {
        console.log("Show all users to the admin!");
    }
});

/****************
**
** Public Routes Section
**
****************/
var publicSection = FlowRouter.group({});

// Root
publicSection.route('/', {
    name: "root",
    action: function() {
        BlazeLayout.render("baseLayout", { content: "map" });
    }
});

// // Login
// publicSection.route("/login", {
//     name: "login",
//     action: function() {
//         // CHANGE
//         BlazeLayout.render("login");
//     }
// })

// // Register
// publicSection.route("/signup", {
//     name: "signup",
//     action: function() {
//         // CHANGE
//         BlazeLayout.render("signup");
//     }
// })

// Blog
publicSection.route('/blog', {
    name: "blog",
    action: function() {
        BlazeLayout.render("blogLayout", { content: "blogHome" });
    }
});

// Blogpost
publicSection.route('/blog/:category/:postId', {
    name: "blogPost",
    action: function() {
        BlazeLayout.render("blogLayout", { content: "blogPost" });
    }
});

/****************
**
** Logged In Routes Section
**
****************/
var loggedInSection = FlowRouter.group({});

loggedIn = FlowRouter.group({
    triggersEnter: [
        function() {
            var route;
            if (!(Meteor.loggingIn() || Meteor.userId())) {
                route = FlowRouter.current();
                if (route.route.name !== 'login') {
                    Session.set('redirectAfterLogin', route.path);
                }
                return FlowRouter.go('login');
            }
        }
    ]
});

/* TIPS:
it’s a good idea to use names for routes, this way you refer to the name 
in your code instead of the path (using arillo:flow-router-helpers). 
Whenever you change the path, your code won’t break.
*/
