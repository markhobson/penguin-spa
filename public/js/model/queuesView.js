/*
 * View model for listing the queues.
 */
define(["knockout", "knockout-mapping", "model/page"], function(ko, mapping, page) {
	
	var model = {
		
		queues: ko.observableArray(),
		
		load: function(done) {
			$.getJSON("/api/queues", function(data) {
				mapping.fromJS(data, {}, model.queues);
				done();
			});
		},
		
		show: function() {
			model.load(function() {
				page.show("queuesView");
			});
		}
	};
	
	page.queuesView = model;
});
