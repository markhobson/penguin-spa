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

		saveQueue: function(queue, callback) {
			queue._id = id++;
			queues.push(queue);
			callback(queue);
		},

		saveStory: function(queueId, story, callback) {
			this.findQueue(queueId, function(queue) {
				queue.stories.push(story);
				callback(story);
			});
		}
	};
});
