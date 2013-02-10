/*
 * Configures the router for queues.
 */
define(["router", "model/page", "model/queueCreate", "model/queuesView", "model/queueView"], function(router, page) {
	router.on("/queues", page.queuesView.show);
	
	router.on("/queues/create", page.queueCreate.show);
	
	router.on("/queue/:id", page.queueView.show);
});
