/*
 * Penguin client.
 */
require.config({
	
	paths: {
		
		// jQuery
		jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min",
		"jquery-json": "lib/jquery-json",

		// Knockout
		knockout: "//ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.0",
		"knockout-mapping": "//cdnjs.cloudflare.com/ajax/libs/knockout.mapping/2.3.4/knockout.mapping",
		"knockout-ext": "lib/koExternalTemplateEngine-amd.min",
		infuser: "lib/infuser-amd.min",
		trafficCop: "lib/TrafficCop.min",

		// Director
		director: "lib/director.min",
		
		// Bootstrap
		bootstrap: "//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min"
	},
	
	shim: {
		bootstrap: ["jquery"]
	}

});

require(["bootstrap", "knockout-ext", "route/routes", "error"]);
