/*
 * Processes command-line arguments.
 */
define(["optimist", "app"], function(optimist, app) {

	var defaultServiceHost = "localhost";
	var defaultServicePort = 8081;
	
	var opts = optimist
		.usage("Starts the Penguin SPA client.")
		.options("h", {
			alias: "help",
			describe: "Shows this help"
		})
		.options("p", {
			alias: "port",
			describe: "Sets the server port",
			"default": process.env.PORT || 8080
		})
		.options("s", {
			alias: "service",
			describe: "Sets the web service (host:port)",
			"default": defaultServiceHost + ":" + defaultServicePort
		});
	
	if (opts.argv.help) {
		opts.showHelp();
		return;
	}
	
	app.set("port", opts.argv.port);
	
	var serviceTokens = opts.argv.service.split(":");
	app.set("service.host", serviceTokens[0] || defaultServiceHost);
	app.set("service.port", serviceTokens[1] || defaultServicePort);
	
});
