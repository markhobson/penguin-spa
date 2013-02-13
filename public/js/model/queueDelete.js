/*
 * View model for deleting a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var model = {
		
		queue: mapping.fromJS({
			_id: null,
			name: null,
			stories: []
		}),
		
		load: function(id, done) {
			$.getJSON("/api/queue/" + id, function(data) {
				mapping.fromJS(data, {}, model.queue);
				done();
			});
		},
		
		del: function() {
			$.ajax({
				type: "DELETE",
				url: "/api/queue/" + model.queue._id(),
				success: function(data) {
					window.location.hash = "/queues";
				}
			});
		},
		
		show: function(id) {
			model.load(id, function() {
				page.show("queueDelete");
			});
		}
	};
	
	page.queueDelete = model;
});
