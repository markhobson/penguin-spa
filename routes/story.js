/*
 * Story resource.
 */
var queue = require("./queue");

exports.create = function(request, response)
{
	var description = request.body.description;
	var queueId = request.params.id;

	var story = {"description": description};
	queue.getQueue(queueId).stories.push(story);
	queue.save();

	// TODO: return story id when available
	response.send(201);
};
