Template.listLocations.rendered = function () {
	// subscribe to locations collection to pass data securely
  Meteor.subscribe('Locations');
};

Template.listLocations.helpers({
	// pass data to template via helper method
  Locations: function(){
    // set default location
		var startLocation = [-118.4590861, 33.9882332];
		// find list of nearby locations sorted by distance using mongoDB $near
    var locations = Locations.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: startLocation
          },
          $maxDistance: 50000000
        }
      }
    });
    return locations;
	}
});