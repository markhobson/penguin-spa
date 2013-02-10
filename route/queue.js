/*
 * Configures the router for queues.
 */
module.exports = function(app, data) {
	
	var queue = require("../resource/queue")(data);

	app.get("/api/queues", queue.list);
	
	app.get("/api/queue/:id", queue.get);
	
	app.post("/api/queues", queue.create);
};
