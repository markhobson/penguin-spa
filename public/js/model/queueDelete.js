/*
 * View model for deleting a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	page.queueDelete = {
		
		queue: mapping.fromJS({
			_id: null,
			name: null,
			stories: []
		}),
		
		load: function(id, done) {
			$.getJSON("/api/queue/" + id, function(data) {
				mapping.fromJS(data, {}, page.queueDelete.queue);
				done();
			});
		},
		
		del: function() {
			$.ajax({
				type: "DELETE",
				url: "/api/queue/" + page.queueDelete.queue._id(),
				success: function(data) {
					window.location.hash = "/queues";
				}
			});
		},
		
		show: function(id) {
			page.queueDelete.load(id, function() {
				page.show("queueDelete");
			});
		}
	};
});
