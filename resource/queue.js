/*
 * Queue resource.
 */
define(["data/index"], function(data) {
	
	return {
		
		list: function(request, response) {
			data.findQueues(function(queues) {
				response.send(queues);
			});
		},

		get: function(request, response) {
			
			var id = request.params.id;
			
			data.findQueue(id, function(queue) {
				response.send(queue || 404);
			});
		},

		create: function(request, response) {
			
			var queue = {
				name: request.body.name,
				stories: []
			};

			data.saveQueue(queue, function(queue) {
				response.send(201, {_id: queue._id});
			});
		}
	};
});
