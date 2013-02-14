/*
 * Configures the router for stories.
 */
define(["router", "model/page", "model/storyCreate"], function(router, page) {
	
	router.on("/queue/:queueId/stories/create", page.storyCreate.show);
});
