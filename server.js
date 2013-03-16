/*
 * Penguin SPA server.
 */
var cli = require("./cli");
var App = require("./app");

var config = cli.config();

if (config == null) {
	cli.showHelp();
}
else {
	var app = App.create(config.service.port, config.service.host);
	console.log("Using web service " + config.service.host + ":" + config.service.port);
	
	app.listen(config.port, function() {
		console.log("Server listening on port " + config.port);
	});
}
