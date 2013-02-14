/*
 * Story resource.
 */
define(["data/index"], function(data) {
	
	return {
		
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
		}
	};
});
