/*
 * Story resource.
 */
var queue = require("./queue");

// ----------------------------------------------------------------------------
// Public methods
// ----------------------------------------------------------------------------

exports.create = function(request, response)
{
	var queueId = request.params.id;
	var description = request.body.description;

	var story = createStory(description);
	queue.getQueue(queueId).stories.push(story);
	queue.save();

	// TODO: return story id when available
	response.send(201);
};

// ----------------------------------------------------------------------------
// Private methods
// ----------------------------------------------------------------------------

var createStory = function(description)
{
	return {
		description: description
	};
};
