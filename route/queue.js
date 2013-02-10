/*
 * Configures the router for queues.
 */
var queue = require("../resource/queue");

module.exports = function(app)
{
	app.get("/api/queues", queue.list);
	app.get("/api/queue/:id", queue.get);
	app.post("/api/queues", queue.create);
};
