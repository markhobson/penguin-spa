/*
 * Story resource.
 */
var dao = require("../dao/memory");

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
	
	dao.findQueue(queueId, function(queue)
	{
		queue.stories.push(story);
		
		// TODO: return story id when available
		response.send(201);
	});
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
