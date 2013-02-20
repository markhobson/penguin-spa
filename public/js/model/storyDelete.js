/*
 * View model for deleting a story.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var model = {
		
		queueId: ko.observable(),
		
		story: mapping.fromJS({
			_id: null,
			name: null,
			description: null,
			author: null
		}),
		
		load: function(queueId, id, done) {
			model.queueId(queueId);
			$.getJSON("/api/queue/" + queueId + "/story/" + id, function(data) {
				mapping.fromJS(data, {}, model.story);
				done();
			});
		},
		
		del: function() {
			$.ajax({
				type: "DELETE",
				url: "/api/queue/" + model.queueId() + "/story/" + model.story._id(),
				success: function(data) {
					window.location.hash = "/queue/" + model.queueId();
				}
			});
		},
		
		show: function(queueId, id) {
			model.load(queueId, id, function() {
				page.show("storyDelete");
			});
		}
	};
	
	page.storyDelete = model;
});
