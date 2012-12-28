/*
 * View model for listing the queues.
 */
define(["knockout", "knockout-mapping", "model/page"], function(ko, mapping, page) {
	
	page.queuesView = {
		
		queues: ko.observableArray(),
		
		load: function(done) {
			$.getJSON("/api/queues", function(data) {
				mapping.fromJS(data, {}, page.queuesView.queues);
				done();
			});
		},
		
		show: function() {
			page.queuesView.load(function() {
				page.show("queuesView");
			});
		}
		
	};
	
});
