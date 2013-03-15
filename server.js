/*
 * Penguin server.
 */
var requirejs = require("requirejs");

requirejs.config({
	nodeRequire: require
});

requirejs(["app", "cli"], function(app) {
	
	// start server
	
	var port = app.get("port");

	if (port) {
		
		var serverHost = app.get("server.host");
		var serverPort = app.get("server.port");
		app.useServer(serverHost, serverPort);
		console.log("Using Penguin server " + serverHost + ":" + serverPort);
		
		app.listen(port, function() {
			console.log("Server listening on port " + port);
		});
	}
});
