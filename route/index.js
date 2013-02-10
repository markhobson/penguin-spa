/*
 * Aggregates routes.
 */
module.exports = function(app, data) {
	
	require("./queue")(app, data);
	require("./story")(app, data);
};
