/*
 * Penguin application.
 */
var express = require("express");
var httpProxy = require("http-proxy");
var path = require("path");

exports.create = function(servicePort, serviceHost) {
	
	var app = express()
		.use(express.favicon())
		.use(express.logger("dev"))
		.use("/api", httpProxy.createServer(servicePort, serviceHost))
		.use(express.bodyParser())
		.use(express.methodOverride())
		.use(express.static(path.join(this.__dirname, "public")));

	// configure development profile

	if (app.get("env") == "development") {
		app.use(express.errorHandler());
	}
	
	return app;
};
