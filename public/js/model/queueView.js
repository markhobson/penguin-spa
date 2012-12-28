/*
 * View model for displaying a queue.
 */
define(["knockout", "knockout-mapping", "model/page"], function(ko, mapping, page) {

	page.queueView = {
		
		queue: mapping.fromJS({
			id: null,
			name: null,
			stories: []
		}),
		
		load: function(id, done) {
			$.getJSON("/api/queue/" + id, function(data) {
				mapping.fromJS(data, {}, page.queueView.queue);
				done();
			});
		},
		
		show: function(id) {
			page.queueView.load(id, function() {
				page.show("queueView");
			});
		}
		
	};

});
