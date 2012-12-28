/*
 * View model for adding a story to a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var newStory = {
		description: null,
		queueId: null
	};
	
	page.storyCreate = {
		
		story: mapping.fromJS(newStory),
		
		save: function() {
			$.postJSON("/api/queue/" + page.storyCreate.story.queueId() + "/stories", ko.toJSON(this.story), function(data) {
				window.location.hash = "/queue/" + page.storyCreate.story.queueId();
			});
		},
		
		reset: function() {
			mapping.fromJS(newStory, page.storyCreate.story);
		},
		
		show: function(id) {
			page.storyCreate.reset();
			page.storyCreate.story.queueId(id);
			page.show("storyCreate");
		}
		
	};
	
});
