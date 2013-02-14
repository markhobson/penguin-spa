/*
 * In-memory data layer.
 */
define(function() {
	
	var queues = [];
	var id = 1;

	return {
		
		findQueues: function(callback) {
			callback(queues);
		},

		findQueue: function(id, callback) {
			callback(queues[id - 1]);
		},

		createQueue: function(queue, callback) {
			queue._id = id++;
			// TODO: insert queue into array ordered by name
			queues.push(queue);
			callback(queue);
		},
		
		updateQueue: function(queue, callback) {
			queues[queue._id - 1] = queue;
			callback(true);
		},
		
		deleteQueue: function(id, callback) {
			// TODO: remove queue from array
			callback(true);
		},

		createStory: function(queueId, story, callback) {
			this.findQueue(queueId, function(queue) {
				queue.stories.push(story);
				callback(story);
			});
		}
	};
});
