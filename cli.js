/*
 * Processes command-line arguments.
 */
var optimist = require("optimist");

exports.config = function() {

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
		return null;
	}
	
	var serviceTokens = opts.argv.service.split(":");
	var serviceHost = serviceTokens[0] || defaultServiceHost;
	var servicePort = serviceTokens[1] || defaultServicePort;
	
	return {
		port: opts.argv.port,
		service: {
			host: serviceHost,
			port: servicePort
		}
	};
};
