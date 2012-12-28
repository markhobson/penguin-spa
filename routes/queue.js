/*
 * Queue resource.
 */
var fs = require("fs");

var queues = [];

exports.list = function(request, response)
{
	response.send(queues);
};

exports.get = function(request, response)
{
	var id = request.params.id - 1;
	
	response.send(queues[id] || 404);
};

exports.create = function(request, response)
{
	var name = request.body.name;
	var queue = createQueue(name);

	queues.push(queue);
	save();
	
	response.send(201, {id: queue.id});
};

var createQueue = function(name)
{
	return {
		id: queues.length + 1,
		name: name
	};
};

/* 
 * Save and load operations.
 */
var save = function()
{
	console.log("Saved " + queues.length + " queues\n:" + JSON.stringify(queues));
	
	fs.writeFile(".saved-queues.json", JSON.stringify(queues), function(err)
	{
		if (err)
		{
			throw err;
		}
		
		console.log("It's saved!");
	});
};

exports.load = function()
{
	fs.readFile(".saved-queues.json", function(err, data)
	{
		if (!err)
		{
			console.log(JSON.parse(data));
			queues = JSON.parse(data);
			console.log("Loaded " + queues.length + " queues");
		}
	});
};
