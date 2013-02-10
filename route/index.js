/*
 * Aggregates routes.
 */
module.exports = function(app)
{
	require("./queue")(app);
	require("./story")(app);
};
