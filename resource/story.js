/*
 * Story resource.
 */
var data = require("../data/mongodb");

// ----------------------------------------------------------------------------
// Public methods
// ----------------------------------------------------------------------------

exports.create = function(request, response)
{
	var queueId = request.params.id;

	var story =
	{
		name: request.body.name,
		description: request.body.description,
		author: request.body.author
	};
	
	data.saveStory(queueId, story, function(story)
	{
		// TODO: return story id when available
		response.send(201);
	});
};
