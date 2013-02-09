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
	var name = request.body.name;
	var description = request.body.description;
	var author = request.body.author;

	var story = createStory(name, description, author);
	queue.getQueue(queueId).stories.push(story);
	queue.save();

	// TODO: return story id when available
	response.send(201);
};

// ----------------------------------------------------------------------------
// Private methods
// ----------------------------------------------------------------------------

var createStory = function(name, description, author)
{
	return {
		name: name,
		description: description,
		author: author
	};
};
