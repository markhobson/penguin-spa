/*
 * Queue resource.
 */
var data = require("../data/mongodb");

// ----------------------------------------------------------------------------
// Public methods
// ----------------------------------------------------------------------------

exports.list = function(request, response)
{
	data.findQueues(function(queues)
	{
		response.send(queues);
	});
};

exports.get = function(request, response)
{
	var id = request.params.id;
	
	data.findQueue(id, function(queue)
	{
		response.send(queue || 404);
	});
};

exports.create = function(request, response)
{
	var queue = {
		name: request.body.name,
		stories: []
	};

	data.saveQueue(queue, function(queue)
	{
		response.send(201, {_id: queue._id});
	});
};
