/*
 * Configures the router for queues.
 */
define(["app", "resource/queue"], function(app, queue) {
	
	app.get("/api/queues", queue.list);
	
	app.get("/api/queue/:id", queue.get);
	
	app.post("/api/queues", queue.create);
});
