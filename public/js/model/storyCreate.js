/*
 * View model for adding a story to a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var model = page.storyCreate = {};
	
	var newStory = {
		reference: null,
		title: null,
		author: null
	};
	
	model.queueId = ko.observable();
		
	model.story = mapping.fromJS(newStory);
		
	model.create = function() {
		$.postJSON("/api/queue/" + model.queueId() + "/stories", ko.toJSON(model.story), function(data) {
			window.location.hash = "/queue/" + model.queueId();
		});
	};
		
	model.reset = function() {
		mapping.fromJS(newStory, model.story);
	};
		
	model.show = function(queueId) {
		model.queueId(queueId);
		model.reset();
		page.show("storyCreate");
	};
});
