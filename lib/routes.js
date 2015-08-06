Router.route('/', function () {
  this.render('home');
}, {name: 'home'});

Router.route('locations/add', function () {
  this.render('addLocation');
}, {name:'addLocation'});