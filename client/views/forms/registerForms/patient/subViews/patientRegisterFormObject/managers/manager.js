Template.patientRegisterFormObject.events({
  //Events
  //
  'submit form': function(event){
    event.preventDefault();
    var typeUser=0;
    var typeUserText="patient";

    Accounts.createUser({
      login:$('[name=login]').val(),
      password:$('[name=password]').val(),
      email:$('[name=email]').val(),
      phone:$('[name=phone]').val(),
      pesel:$('[name=pesel]').val(),
      street:$('[name=street]').val(),
      streetNumber:$('[name=streetNumber]').val(),
      postCode:$('[name=postCode]').val(),
      city:$('[name=city]').val(),
      typeUser:typeUser,
      typeUserText:typeUserText,
    }, function(error){
      if(error){
          console.log(error.reason); // Output error if registration fails
      } else {
          Router.go("main"); // Redirect user if registration succeeds
      }
    });
  }
});
