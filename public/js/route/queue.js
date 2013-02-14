/*
 * Configures the router for queues.
 */
define(["router", "model/page", "model/queueCreate", "model/queueUpdate", "model/queueDelete", "model/queueList", "model/queueView"], function(router, page) {
	
	router.on("/queues", page.queueList.show);
	
	router.on("/queues/create", page.queueCreate.show);
	
	router.on("/queue/:id", page.queueView.show);
	
	router.on("/queue/:id/update", page.queueUpdate.show);
	
	router.on("/queue/:id/delete", page.queueDelete.show);
});
