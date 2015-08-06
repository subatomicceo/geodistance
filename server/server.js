// on meteor startup
Meteor.startup(function () {
    
	// If locations collection empty
    if(Locations.find().count() === 0){
        // import default locations from json
        var defaultLocations = {};
		defaultLocations = JSON.parse(Assets.getText("locations.json"));
        defaultLocations.forEach(function(location, index){
        	Locations.insert(location);
        });
    }

    Locations._ensureIndex({location: "2dsphere"});

	Meteor.publish('Locations', function(){
    	return Locations.find({});
	});
});