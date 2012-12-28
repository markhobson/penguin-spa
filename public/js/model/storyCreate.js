/*
 * View model for adding a story to a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var newStory = {
		description: null,
	};
	
	page.storyCreate = {
		
		queueId: ko.observable(),
		
		story: mapping.fromJS(newStory),
		
		save: function() {
			$.postJSON("/api/queue/" + page.storyCreate.queueId() + "/stories", ko.toJSON(this.story), function(data) {
				window.location.hash = "/queue/" + page.storyCreate.queueId();
			});
		},
		
		reset: function() {
			mapping.fromJS(newStory, page.storyCreate.story);
		},
		
		show: function(id) {
			page.storyCreate.queueId(id);
			page.storyCreate.reset();
			page.show("storyCreate");
		}
		
	};
	
});
