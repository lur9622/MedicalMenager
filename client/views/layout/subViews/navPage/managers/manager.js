Template.navPage.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});

Template.navPage.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
console.log(Meteor.user());
