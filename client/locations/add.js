Template.addLocation.rendered = function () {
	Meteor.subscribe('Locations');
  this.autorun(function () {
    if (GoogleMaps.loaded()) {
      $("input").geocomplete().bind("geocode:result", function(event, result){
        var location = {};
        location.address = result.formatted_address;
        location.location = {
          "type":"Point",
          "coordinates": [
            result.geometry.location.K,
            result.geometry.location.G
          ]
        }
        Session.set('location',location);
      });
    }
  });
};

Template.addLocation.events({
  'submit #addLocation': function(e,t){
    e.preventDefault();
    var location = Session.get('location');
    if(location){
      Meteor.call('addLocation',location, function(err,res){
        if(err){
          console.log('err ->',err);
        }
      });
    }
    return false;
  }
});