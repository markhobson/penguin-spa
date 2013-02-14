/*
 * View model for creating a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var newQueue = {
		name: null
	};
	
	var model = {
		
		queue: mapping.fromJS(newQueue),
		
		create: function() {
			$.postJSON("/api/queues", ko.toJSON(model.queue), function(data) {
				window.location.hash = "/queues";
			});
		},
		
		reset: function() {
			mapping.fromJS(newQueue, model.queue);
		},
		
		show: function() {
			model.reset();
			page.show("queueCreate");
		}
	};
	
	page.queueCreate = model;
});
