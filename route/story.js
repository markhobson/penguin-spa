/*
 * Configures the router for stories.
 */
define(["app", "resource/story"], function(app, story) {
	
	app.post("/api/queue/:id/stories", story.create);
});
