/*
 * View model for editing a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	var model = page.queueUpdate = {};
		
	model.queue = mapping.fromJS({
		_id: null,
		name: null
	});
		
	model.load = function(id, done) {
		$.getJSON("/api/queue/" + id, function(data) {
			mapping.fromJS(data, {}, model.queue);
			done();
		});
	};
		
	model.update = function() {
		$.putJSON("/api/queue/" + model.queue._id(), ko.toJSON(model.queue), function(data) {
			window.location.hash = "/queues";
		});
	};
		
	model.show = function(id) {
		model.load(id, function() {
			page.show("queueUpdate");
		});
	};
});
