/*
 * View model for displaying a queue.
 */
define(["knockout", "knockout-mapping", "model/page"], function(ko, mapping, page) {

	page.queueView = {
		
		queue: mapping.fromJS({
			name: null,
			stories: ko.observableArray()
		}),
		
		load: function(id) {
			$.getJSON("/api/queue/" + id, function(data) {
				mapping.fromJS(data, {}, page.queueView.queue);
			});
		},
		
		show: function(id) {
			page.queueView.load(id);
			page.show("queueView");
		}
		
	};

});
