/*
 * Configures the router for queues.
 */
define(["router", "model/page", "model/queueCreate", "model/queuesView", "model/queueView", "model/storyCreate"], function(router, page) {

	router.on("/queues", page.queuesView.show);
	
	router.on("/queue/new", page.queueCreate.show);
	
	router.on("/queue/:id", page.queueView.show);

	router.on("/queue/:id/new", page.storyCreate.show);
	
});
