/*
 * Configures the router for stories.
 */
define(["app", "resource/story"], function(app, story) {
	
	app.post("/api/queue/:queueId/stories", story.create);
	
	app.get("/api/queue/:queueId/story/:id", story.get);
	
	app.put("/api/queue/:queueId/story/:id", story.update);
	
	app.del("/api/queue/:queueId/story/:id", story.del);
});
