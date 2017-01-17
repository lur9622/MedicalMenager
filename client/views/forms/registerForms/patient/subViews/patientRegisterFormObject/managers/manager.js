Template.patientRegisterFormObject.events({
  //Events
  //
  'submit form': function(event){
    event.preventDefault();
    var typeUser=0;
    var typeUserText="patient";

    Accounts.createUser({
      username:$('[name=login]').val(),
      password:$('[name=password]').val(),
      email:$('[name=email]').val(),
      profile: {
        phone:$('[name=phone]').val(),
        pesel:$('[name=pesel]').val(),
        street:$('[name=street]').val(),
        streetNumber:$('[name=streetNumber]').val(),
        postCode:$('[name=postCode]').val(),
        city:$('[name=city]').val(),
        typeUser:typeUser,
        typeUserText:typeUserText
      }
    }, function(error){
      if(error){
          Session.set('errorMessage', error.reason);
          console.log(error.reason);
      } else {
          Router.go("main"); // Redirect user if registration succeeds
      }
    });
  }
});
