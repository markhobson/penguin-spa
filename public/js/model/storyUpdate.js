/*
 * View model for editing a story.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var model = {
		
		queueId: ko.observable(),
		
		story: mapping.fromJS({
			_id: null,
			name: null,
			title: null,
			author: null
		}),
		
		load: function(queueId, id, done) {
			model.queueId(queueId);
			$.getJSON("/api/queue/" + queueId + "/story/" + id, function(data) {
				mapping.fromJS(data, {}, model.story);
				done();
			});
		},
		
		update: function() {
			$.putJSON("/api/queue/" + model.queueId() + "/story/" + model.story._id(), ko.toJSON(model.story), function(data) {
				window.location.hash = "/queue/" + model.queueId();
			});
		},
		
		show: function(queueId, id) {
			model.load(queueId, id, function() {
				page.show("storyUpdate");
			});
		}
	};
	
	page.storyUpdate = model;
});
