/*
 * Penguin application.
 */
define(["express", "http-proxy", "path"], function(express, httpProxy, path) {
	
	var app = express();

	// configure application

	app.configure(function() {
		app.use(express.favicon());
		app.use(express.logger("dev"));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.static(path.join(this.__dirname, "public")));
	});

	// configure development profile

	app.configure("development", function() {
		app.use(express.errorHandler());
	});
	
	app.useServer = function(serverPort, serverHost) {
		var server = httpProxy.createServer(serverPort, serverHost);
		app.use("/api", server);
	};

	return app;
});
