/*
 * View model for editing a queue.
 */
define(["knockout", "knockout-mapping", "model/page", "jquery-json"], function(ko, mapping, page) {
	
	page.queueEdit = {
		
		queue: mapping.fromJS({
			_id: null,
			name: null
		}),
		
		load: function(id, done) {
			$.getJSON("/api/queue/" + id, function(data) {
				mapping.fromJS(data, {}, page.queueEdit.queue);
				done();
			});
		},
		
		save: function() {
			$.putJSON("/api/queue/" + page.queueEdit.queue._id(), ko.toJSON(this.queue), function(data) {
				window.location.hash = "/queue/" + page.queueEdit.queue._id();
			});
		},
		
		show: function(id) {
			page.queueEdit.load(id, function() {
				page.show("queueEdit");
			});
		}
	};
});
