if (Meteor.isClient) {

    Template.registerForm.events({
        'submit form' : function(event, template) {
            event.preventDefault();
            var emailVal = template.find("#register-email").value,
                passwordVal = template.find("#register-password").value;
            
            Accounts.createUser({
                email: emailVal,
                password: passwordVal
            }, function(err) {
                console.log(err.reason);
                $(".register-form").addClass("has-warning");
                $(".register-form .btn-default").addClass("btn-danger");
                $(".register-form .bg-danger").html(err.reason);
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
                
                Meteor.loginWithPassword(emailVal, passwordVal, function(err) {
                    console.log(err.reason);
                    $(".login-form").addClass("has-warning");
                    $(".login-form .btn-default").addClass("btn-danger");
                    $(".login-form .bg-danger").html(err.reason);
                });
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
