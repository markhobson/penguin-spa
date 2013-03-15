/*
 * Processes command-line arguments.
 */
define(["optimist", "app"], function(optimist, app) {

	var defaultServerHost = "localhost";
	var defaultServerPort = 8081;
	
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
			alias: "server",
			describe: "Sets the Penguin server (host:port)",
			"default": defaultServerHost + ":" + defaultServerPort
		});
	
	if (opts.argv.help) {
		opts.showHelp();
		return;
	}
	
	app.set("port", opts.argv.port);
	
	var serverTokens = opts.argv.server.split(":");
	app.set("server.host", serverTokens[0] || defaultServerHost);
	app.set("server.port", serverTokens[1] || defaultServerPort);
	
});
