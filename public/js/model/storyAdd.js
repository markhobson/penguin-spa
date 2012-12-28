/*
 * View model for adding a story to a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var newStory = {
		description: null,
		queueId: null
	};
	
	page.storyAdd = {
		
		story: mapping.fromJS(newStory),
		
		add: function() {
			$.postJSON("/api/story", ko.toJSON(this.story), function(data) {
				window.location.hash = "/queue/" + page.storyAdd.story.queueId();
			});
		},
		
		reset: function() {
			mapping.fromJS(newStory, page.storyAdd.story);
		},
		
		show: function(id) {
			page.storyAdd.reset();
			page.storyAdd.story.queueId(id);
			page.show("storyAdd");
		}
		
	};
	
});
