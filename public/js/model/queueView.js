/*
 * View model for displaying a queue.
 */
define(["knockout", "knockout-mapping", "model/page"], function(ko, mapping, page) {
	
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
		
		show: function(id) {
			model.load(id, function() {
				page.show("queueView");
			});
		}
	};
	
	page.queueView = model;
});
