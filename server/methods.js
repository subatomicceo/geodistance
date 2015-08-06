Meteor.methods({
  addLocation: function (location) {
    Locations.insert(location);
  }
})