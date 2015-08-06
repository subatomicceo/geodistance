Meteor.startup(function() {
	// init google map on startup
	GoogleMaps.load({
		key: 'AIzaSyDB-l6VtGnwa4HeJSHplDe0OW-f0bOTAO4',
		libraries: 'places'
	});
});