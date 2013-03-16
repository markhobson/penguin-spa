/*
 * Penguin application.
 */
var express = require("express");
var httpProxy = require("http-proxy");
var path = require("path");

exports.create = function(servicePort, serviceHost) {
	
	var app = express();

	// configure application

	app.configure(function() {
		app.use(express.favicon());
		app.use(express.logger("dev"));
		app.use("/api", httpProxy.createServer(servicePort, serviceHost));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.static(path.join(this.__dirname, "public")));
	});

	// configure development profile

	app.configure("development", function() {
		app.use(express.errorHandler());
	});
	
	return app;
};
