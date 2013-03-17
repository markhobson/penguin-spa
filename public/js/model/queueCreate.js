/*
 * View model for creating a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var model = page.queueCreate = {};

	var newQueue = {
		name: null
	};
	
	model.queue = mapping.fromJS(newQueue);
		
	model.create = function() {
		$.postJSON("/api/queues", ko.toJSON(model.queue), function(data) {
			window.location.hash = "/queues";
		});
	};
		
	model.reset = function() {
		mapping.fromJS(newQueue, model.queue);
	};
		
	model.show = function() {
		model.reset();
		page.show("queueCreate");
	};
});
