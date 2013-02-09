/*
 * Penguin client.
 */
require.config({
	
	paths: {
		jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min",
		"jquery-json": "lib/jquery-json",
		knockout: "//ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.0",
		"knockout-mapping": "//cdnjs.cloudflare.com/ajax/libs/knockout.mapping/2.3.4/knockout.mapping",
		"knockout-ext": "lib/koExternalTemplateEngine-amd.min",
		infuser: "lib/infuser-amd.min",
		trafficCop: "lib/TrafficCop.min",
		director: "lib/director.min",
		bootstrap: "//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min"
	},
	
	shim: {
		bootstrap: ["jquery"]
	}

});

require(["bootstrap", "knockout-ext", "route/routes", "error"]);
