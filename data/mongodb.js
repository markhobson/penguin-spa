/*
 * MongoDB data layer.
 */
define(["mongodb"], function(mongodb) {
	
	var dbName = "penguin";
	var queuesName = "queues";
	var client = new mongodb.MongoClient(new mongodb.Server("localhost", 27017, {native_parser: true}));

	return {
		
		findQueues: function(callback) {
			client.open(function(error, client) {
				client
					.db(dbName)
					.collection(queuesName)
					.find()
					.toArray(function(error, queues) {
						callback(queues);
						client.close();
					});
			});
		},

		findQueue: function(id, callback) {
			client.open(function(error, client) {
				client
					.db(dbName)
					.collection(queuesName)
					.findOne({_id: new mongodb.ObjectID(id)}, function(error, queue) {
						callback(queue);
						client.close();
					});
			});
		},

		saveQueue: function(queue, callback) {
			client.open(function(error, client) {
				client
					.db(dbName)
					.collection(queuesName)
					.insert(queue, {w: 1}, function(error, queues) {
						callback(queues[0]);
						client.close();
					});
			});
		},

		saveStory: function(queueId, story, callback) {
			client.open(function(error, client) {
				client
					.db(dbName)
					.collection(queuesName)
					.update({_id: new mongodb.ObjectID(queueId)}, {$push: {stories: story}}, function(error, story) {
						callback(story);
						client.close();
					});
			});
		}
	};
});
