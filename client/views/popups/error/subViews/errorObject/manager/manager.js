Template.errorObject.helpers({
  errorMessage: function() {
    $("#errorMessage").slideDown(300);
    setTimeout( function(){
      $("#errorMessage").slideUp(300);
    }, 6000);
    return Session.get('errorMessage');
  }
});
