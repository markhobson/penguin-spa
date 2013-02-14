/*
 * Story resource.
 */
define(["data/index"], function(data) {
	
	return {
		
		get: function(request, response) {
			
			var queueId = request.params.queueId;
			var id = request.params.id;
			
			data.findStory(queueId, id, function(story) {
				response.send(story || 404);
			});
		},

		create: function(request, response) {
			
			var queueId = request.params.queueId;

			var story = {
				name: request.body.name,
				description: request.body.description,
				author: request.body.author
			};
			
			data.createStory(queueId, story, function(story) {
				response.send(201, {_id: story._id});
			});
		},
		
		update: function(request, response) {
			
			var queueId = request.params.queueId;
			
			var story = {
				_id: request.params.id,
				name: request.body.name,
				description: request.body.description,
				author: request.body.author
			};
			
			data.updateStory(queueId, story, function(success) {
				response.send(success ? 204 : 404);
			});
		}
	};
});
