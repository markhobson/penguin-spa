/*
 * View model for deleting a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var model = page.queueDelete = {};
		
	model.queue = mapping.fromJS({
		_id: null,
		name: null,
		stories: []
	});
		
	model.load = function(id, done) {
		$.getJSON("/api/queue/" + id, function(data) {
			mapping.fromJS(data, {}, model.queue);
			done();
		});
	};
		
	model.del = function() {
		$.ajax({
			type: "DELETE",
			url: "/api/queue/" + model.queue._id(),
			success: function(data) {
				window.location.hash = "/queues";
			}
		});
	};
		
	model.show = function(id) {
		model.load(id, function() {
			page.show("queueDelete");
		});
	};
});
