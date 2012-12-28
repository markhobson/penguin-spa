/*
 * Story resource.
 */
var queue = require("./queue");

exports.create = function(request, response)
{
	var description = request.body.description;
	var queueId = request.params.id;

	queue.addStory(queueId, description);

	// TODO: return story id when available
	response.send(201);
};
