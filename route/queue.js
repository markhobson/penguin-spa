/*
 * Configures the router for queues.
 */
define(["app", "resource/queue"], function(app, queue) {
	
	app.get("/api/queues", queue.list);
	
	app.post("/api/queues", queue.create);
	
	app.get("/api/queue/:id", queue.get);
	
	app.put("/api/queue/:id", queue.update);
	
	app.del("/api/queue/:id", queue.del);
});
