/*
 * Penguin server.
 */
var requirejs = require("requirejs");

requirejs.config({
	nodeRequire: require
});

requirejs(["app", "route/index", "http"], function(app, route, http) {
	
	// start server

	http.createServer(app).listen(app.get("port"), function() {
		console.log("Server listening on port " + app.get("port"));
	});
});
