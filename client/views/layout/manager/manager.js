Template.layout.events({
  'click .pageScroll': function(event){
    event.preventDefault();
    var element = $(event.currentTarget).attr('href');
    var searchElement = $("*[data-scroll='" +element+"']")
    $('html, body').animate({
        scrollTop: searchElement.offset().top
    }, 500);
  }
});
