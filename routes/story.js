/*
 * Story resource.
 */
var queue = require("./queue");

exports.create = function(request, response)
{
	var description = request.body.description;
	var queueId = request.body.queueId;

	queue.addStory(queueId, description);

	response.send(201, {id: queue.id});
};
