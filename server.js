/*
 * Penguin SPA server.
 */
var cli = require("./cli");
var app = require("./app");

var config = cli.config();

if (config == null) {
	cli.showHelp();
}
else {
	console.log("Using web service " + config.service.host + ":" + config.service.port);
	
	app.create(config.service.port, config.service.host)
		.listen(config.port, function() {
			console.log("Server listening on port " + config.port);
		});
}
