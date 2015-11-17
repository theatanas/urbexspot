if (Meteor.isClient) {

    Template.registerForm.events({
        'submit form' : function(event, template) {
            event.preventDefault();
            var emailVal = template.find("#register-email").value,
                passwordVal = template.find("#register-password").value;
            
            Accounts.createUser({
                email: emailVal,
                password: passwordVal
            })
        }
    });

    // Implement this:
    // http://blog.benmcmahen.com/post/41741539120/building-a-customized-accounts-ui-for-meteor

    Template.loginForm.events({
        'submit form' : function(event, template) {
            event.preventDefault();
            var emailVal = template.find("#login-email").value,
                passwordVal = template.find("#login-password").value;
                
                Meteor.loginWithPassword(emailVal, passwordVal);
        }
    });

    Template.dashboard.events({
        'click #logout': function(event) {
            event.preventDefault();
            Meteor.logout();
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        console.log("Server Started");
    });
}
