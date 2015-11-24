// TODO: Reset Forgotten Password
// http://steve-adams.me/practical-examples-of-authentication-in-meteor-1-0/

Template.registrationForm.events({
    'submit form': function(event, template) {
        event.preventDefault();
        var emailVal = template.find("#register-email").value,
            passwordVal = template.find("#register-password").value;

        Accounts.createUser({
            email: emailVal,
            password: passwordVal
        }, function(err) {
            $(".register-form").addClass("has-warning");
            $(".register-form .btn-default").addClass("btn-danger");
            $(".register-form .bg-danger").html(err.reason);
        });
    }
});

// The following callback is executed when the template 'registrationForm' is rendered. More info: http://jqueryvalidation.org/validate
Template.registrationForm.rendered = function() {
    $(".register-form").validate({
        errorContainer: ".register-form .bg-danger",
        errorLabelContainer: ".register-form .bg-danger"
    });
}

Template.loginForm.events({
    'submit form': function(event, template) {
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
