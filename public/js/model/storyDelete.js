/*
 * View model for deleting a story.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var model = page.storyDelete = {};
		
	model.queueId = ko.observable();
		
	model.story = mapping.fromJS({
		_id: null,
		reference: null,
		title: null,
		author: null
	});
		
	model.load = function(queueId, id, done) {
		model.queueId(queueId);
		$.getJSON("/api/queue/" + queueId + "/story/" + id, function(data) {
			mapping.fromJS(data, {}, model.story);
			done();
		});
	};
		
	model.del = function() {
		$.ajax({
			type: "DELETE",
			url: "/api/queue/" + model.queueId() + "/story/" + model.story._id(),
			success: function(data) {
				window.location.hash = "/queue/" + model.queueId();
			}
		});
	};
		
	model.show = function(queueId, id) {
		model.load(queueId, id, function() {
			page.show("storyDelete");
		});
	};
});
