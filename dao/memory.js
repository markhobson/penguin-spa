/*
 * Penguin in-memory data layer.
 */
var queues = [];
var id = 1;

// ----------------------------------------------------------------------------
// Public methods
// ----------------------------------------------------------------------------

exports.findQueues = function(callback)
{
	callback(queues);
};

exports.findQueue = function(id, callback)
{
	callback(queues[id - 1]);
};

exports.saveQueue = function(queue, callback)
{
	queue._id = id++;
	queues.push(queue);
	
	callback(queue);
};

exports.saveStory = function(queueId, story, callback)
{
	exports.findQueue(queueId, function(queue)
	{
		queue.stories.push(story);
		callback(story);
	});
};
