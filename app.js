/*
 * Penguin application.
 */
define(["express", "http-proxy", "path"], function(express, httpProxy, path) {
	
	var app = express();

	// configure application

	app.configure(function() {
		app.use(express.favicon());
		app.use(express.logger("dev"));
	});

	// configure development profile

	app.configure("development", function() {
		app.use(express.errorHandler());
	});
	
	app.useService = function(servicePort, serviceHost) {
		var service = httpProxy.createServer(servicePort, serviceHost);
		app.use("/api", service);
		
		// TODO: move back to configure()
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.static(path.join(this.__dirname, "public")));
	};

	return app;
});
