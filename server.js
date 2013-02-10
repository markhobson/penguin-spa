/*
 * Penguin server.
 */
var requirejs = require("requirejs");

requirejs.config({
	nodeRequire: require
});

requirejs(["app", "route/index"], function(app, route) {
	
	// start server

	app.listen(app.get("port"), function() {
		console.log("Server listening on port " + app.get("port"));
	});
});
