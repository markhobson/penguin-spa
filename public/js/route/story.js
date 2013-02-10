/*
 * Configures the router for stories.
 */
define(["router", "model/page", "model/storyCreate"], function(router, page) {
	
	router.on("/queue/:id/stories/create", page.storyCreate.show);
});
