/*
 * Configures the router for stories.
 */
var story = require("../resource/story");

module.exports = function(app)
{
	app.post("/api/queue/:id/stories", story.create);
};
