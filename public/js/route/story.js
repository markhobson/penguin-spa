/*
 * Configures the router for stories.
 */
define(["router", "model/page", "model/storyCreate", "model/storyUpdate", "model/storyDelete"], function(router, page) {
	
	router.on("/queue/:queueId/stories/create", page.storyCreate.show);
	
	router.on("/queue/:queueId/story/:id/update", page.storyUpdate.show);
	
	router.on("/queue/:queueId/story/:id/delete", page.storyDelete.show);
});
