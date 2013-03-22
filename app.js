/*
 * Web server Express application.
 */
var express = require("express");
var httpProxy = require("http-proxy");
var path = require("path");

exports.create = function(servicePort, serviceHost) {
	
	var app = express()
		.use(express.favicon(path.join(__dirname, "public/img/penguin16.png")))
		.use(express.logger("dev"))
		.use("/api", httpProxy.createServer(servicePort, serviceHost))
		.use(express.bodyParser())
		.use(express.methodOverride())
		.use(express.static(path.join(__dirname, "public")));

	// configure development profile

	if (app.get("env") == "development") {
		app.use(express.errorHandler());
	}
	
	return app;
};
