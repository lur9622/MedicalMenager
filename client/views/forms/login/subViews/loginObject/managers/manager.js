Template.loginObject.events({
  //Events
  //
  'submit form': function(event){
    event.preventDefault();
    email = $('[name=email]').val();
    password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function(error){
        if(error){
            console.log(error.reason);
        } else {
            Router.go("main");
        }
    });
  }
});
