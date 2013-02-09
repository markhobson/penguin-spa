/*
 * Story resource.
 */
var dao = require("../dao/memory");

// ----------------------------------------------------------------------------
// Public methods
// ----------------------------------------------------------------------------

exports.create = function(request, response)
{
	var queueId = request.params.id;

	var story = {
		name: request.body.name,
		description: request.body.description,
		author: request.body.author
	};
	
	dao.findQueue(queueId, function(queue)
	{
		queue.stories.push(story);
		
		// TODO: return story id when available
		response.send(201);
	});
};
