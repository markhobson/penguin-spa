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
		
		var serviceHost = app.get("service.host");
		var servicePort = app.get("service.port");
		app.useService(serviceHost, servicePort);
		console.log("Using web service " + serviceHost + ":" + servicePort);
		
		app.listen(port, function() {
			console.log("Server listening on port " + port);
		});
	}
});
