/*
 * Configures the router for stories.
 */
module.exports = function(app, data)
{
	var story = require("../resource/story")(data);

	app.post("/api/queue/:id/stories", story.create);
};
