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
    })

    Template.loginForm.events({
        'submit form' : function(event, template) {
            event.preventDefault();
            var emailVal = template.find("#login-email").value,
                passwordVal = template.find("#login-password").value;
                Meteor.loginWithPassword(emailVal, passwordVal);
        }
    })

    Template.dashboard.events({
        'click #logout': function(event) {
            event.preventDefault();
            Meteor.logout();
        }
    })

    // Session.setDefault('counter', 0);
    // Template.hello.helpers({
    //     counter: function() {
    //         return Session.get('counter');
    //     }
    // });

    // Template.hello.events({
    //     'click button': function() {
    //         Session.set('counter', Session.get('counter') + 1);
    //     }
    // });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
