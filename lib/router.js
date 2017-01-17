Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});
Router.map(function() {
  this.route('main', {path: '/'});
  this.route('aboutUs', {path: '/about'});
  this.route('prices', {path: '/prices'});
  this.route('contact', {path: '/contact'});
  this.route('services', {path: '/services'});
  this.route('login', {path: '/login'});
  this.route('patientRegisterForm', {path: '/register/patient'});
  this.route('test', {path: '/test'});
});
