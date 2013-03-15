/*
 * Penguin application.
 */
define(["express", "path"], function(express, path) {
	
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

	return app;
});
