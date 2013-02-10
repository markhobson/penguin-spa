/*
 * Penguin server.
 */
var requirejs = require("requirejs");

requirejs.config({
	nodeRequire: require
});

requirejs(["app", "cli", "route/index"], function(app) {
	
	// start server
	
	var port = app.get("port");

	if (port) {
		app.listen(port, function() {
			console.log("Server listening on port " + port);
		});
	}
});
