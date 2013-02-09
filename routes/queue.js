/*
 * Queue resource.
 */
var dao = require("../dao/memory");

// ----------------------------------------------------------------------------
// Public methods
// ----------------------------------------------------------------------------

exports.list = function(request, response)
{
	dao.findQueues(function(queues)
	{
		response.send(queues);
	});
};

exports.get = function(request, response)
{
	var id = request.params.id;
	
	dao.findQueue(id, function(queue)
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

	dao.saveQueue(queue, function(queue)
	{
		response.send(201, {id: queue.id});
	});
};
