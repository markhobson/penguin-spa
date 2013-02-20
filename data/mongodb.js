/*
 * MongoDB data layer.
 */
define(["mongodb"], function(mongodb) {
	
	var client = mongodb.MongoClient;
	var url = "mongodb://localhost:27017/penguin";
	var queuesName = "queues";

	var getStoryById = function(queue, id) {
		if (queue != null) {
			for (var index in queue.stories) {
				if (queue.stories[index]._id == id) {
					return queue.stories[index];
				}
			}
		}
		return null;
	};
	
	return {
		
		findQueues: function(callback) {
			client.connect(url, function(error, db) {
				db.collection(queuesName).find().sort({name: 1}).toArray(function(error, queues) {
					callback(queues);
					db.close();
				});
			});
		},

		findQueue: function(id, callback) {
			var oid = new mongodb.ObjectID(id);
			client.connect(url, function(error, db) {
				db.collection(queuesName).findOne({_id: oid}, function(error, queue) {
					callback(queue);
					db.close();
				});
			});
		},

		createQueue: function(queue, callback) {
			client.connect(url, function(error, db) {
				db.collection(queuesName).insert(queue, {w: 1}, function(error, queues) {
					callback(queues[0]);
					db.close();
				});
			});
		},
		
		updateQueue: function(queue, callback) {
			var oid = new mongodb.ObjectID(queue._id);
			client.connect(url, function(error, db) {
				db.collection(queuesName).update({_id: oid}, {$set: {name: queue.name}}, {w: 1}, function(error, count) {
					callback(count == 1);
					db.close();
				});
			});
		},
		
		deleteQueue: function(id, callback) {
			var oid = new mongodb.ObjectID(id);
			client.connect(url, function(error, db) {
				db.collection(queuesName).remove({_id: oid}, {w: 1}, function(error, count) {
					callback(count == 1);
					db.close();
				});
			});
		},

		findStory: function(queueId, id, callback) {
			var queueOid = new mongodb.ObjectID(queueId);
			var oid = new mongodb.ObjectID(id);
			client.connect(url, function(error, db) {
				// until SERVER-142 is fixed we have to filter out the story ourselves
				db.collection(queuesName).findOne({_id: queueOid, "stories._id": oid}, function(error, queue) {
					callback(getStoryById(queue, id));
					db.close();
				});
			});
		},
		
		createStory: function(queueId, story, callback) {
			var queueOid = new mongodb.ObjectID(queueId);
			story._id = new mongodb.ObjectID();
			client.connect(url, function(error, db) {
				db.collection(queuesName).update({_id: queueOid}, {$push: {stories: story}}, {w: 1}, function(error, count) {
					callback(story);
					db.close();
				});
			});
		},
		
		updateStory: function(queueId, story, callback) {
			var queueOid = new mongodb.ObjectID(queueId);
			var oid = new mongodb.ObjectID(story._id);
			client.connect(url, function(error, db) {
				db.collection(queuesName).update(
					{_id: queueOid, "stories._id": oid},
					{$set: {"stories.$.name": story.name, "stories.$.description": story.description, "stories.$.author": story.author}},
					{w: 1},
					function(error, count) {
						callback(count == 1);
						db.close();
					}
				);
			});
		},
		
		deleteStory: function(queueId, id, callback) {
			var queueOid = new mongodb.ObjectID(queueId);
			var oid = new mongodb.ObjectID(id);
			client.connect(url, function(error, db) {
				db.collection(queuesName).update({_id: queueOid}, {$pull: {"stories": {_id: oid}}}, {w: 1}, function(error, count) {
					callback(count == 1);
					db.close();
				});
			});
		}
	};
});
