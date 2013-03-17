/*
 * View model for displaying a queue.
 */
define(["knockout", "knockout-mapping", "model/page"], function(ko, mapping, page) {
	
	var model = page.queueView = {};
		
	model.queue = mapping.fromJS({
		_id: null,
		name: null,
		stories: []
	});
		
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
	
	model.merged = ko.observable();
		
	model.load = function(id, done) {
		$.getJSON("/api/queue/" + id, function(data) {
			mapping.fromJS(data, {}, model.queue);
			done();
		});
	};
		
	model.show = function(id) {
		model.load(id, function() {
			page.show("queueView");
		});
	};
		
	model.showUnmerged = function(id) {
		model.merged(false);
		model.show(id);
	};
		
	model.showMerged = function(id) {
		model.merged(true);
		model.show(id);
	};
		
	model.merge = function(story) {
		$.post("/api/queue/" + model.queue._id() + "/story/" + story._id() + "/merge", function(data) {
			story.merged(true);
		});
	};
		
	model.unmerge = function(story) {
		$.post("/api/queue/" + model.queue._id() + "/story/" + story._id() + "/unmerge", function(data) {
			story.merged(false);
		});
	};
});
