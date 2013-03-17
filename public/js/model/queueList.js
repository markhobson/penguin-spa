/*
 * View model for listing the queues.
 */
define(["knockout", "knockout-mapping", "model/page"], function(ko, mapping, page) {
	
	var model = page.queueList = {};
	
	model.queues = ko.observableArray();
	
	model.load = function(done) {
		$.getJSON("/api/queues", function(data) {
			mapping.fromJS(data, {}, model.queues);
			done();
		});
	};
		
	model.show = function() {
		model.load(function() {
			page.show("queueList");
		});
	};
});
