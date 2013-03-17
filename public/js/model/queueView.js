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
		
		merged: ko.observable(),
		
		load: function(id, done) {
			$.getJSON("/api/queue/" + id, function(data) {
				mapping.fromJS(data, {}, model.queue);
				
				// TODO: move into model.queue when circular dependency resolved
				// TODO: centralise filtering
				
				model.queue.unmergedStories = ko.computed(function() {
					return ko.utils.arrayFilter(this.stories(), function(story) {
						return !story.merged();
					});
				}, model.queue);

				model.queue.mergedStories = ko.computed(function() {
					return ko.utils.arrayFilter(this.stories(), function(story) {
						return story.merged();
					});
				}, model.queue);
				
				done();
			});
		},
		
		show: function(id) {
			model.load(id, function() {
				page.show("queueView");
			});
		},
		
		showUnmerged: function(id) {
			model.merged(false);
			model.show(id);
		},
		
		showMerged: function(id) {
			model.merged(true);
			model.show(id);
		},
		
		merge: function(story) {
			$.post("/api/queue/" + model.queue._id() + "/story/" + story._id() + "/merge", function(data) {
				story.merged(true);
			});
		},
		
		unmerge: function(story) {
			$.post("/api/queue/" + model.queue._id() + "/story/" + story._id() + "/unmerge", function(data) {
				story.merged(false);
			});
		}
	};
	
	page.queueView = model;
});
