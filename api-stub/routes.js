module.exports = function(server) {

  // Create an API namespace, so that the root does not
	// have to be repeated for each end point.
	server.namespace("/api", function() {

		// Return fixture data for "/api/activities"
		server.get("/activities", function(req, res) {
			var activities =
			{
				"activities": [{
					id: 0,
					display_id: "Activity1",
					searchresults_type: "song",
					display_name: "On the Road Again",
					hotttnesss: 54,
					timestamp: "Fri Dec 06 2013 01:05:53 GMT-0600 (CST)"
				}, {
					id: 1,
					display_id: "Activity2",
					searchresults_type: "artist",
					display_name: "Willie Nelson",
					hotttnesss: 99,
					timestamp: "Fri Dec 06 2013 01:05:53 GMT-0600 (CST)"
				}]
			};
			res.send(activities);
		});
	});
};
