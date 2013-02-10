/*
 * MongoDB data layer.
 */
define(["mongodb"], function(mongodb) {
	
	var databaseName = "penguin";
	var mongoClient = new mongodb.MongoClient(new mongodb.Server("localhost", 27017, {native_parser: true}));

	return {
		
		findQueues: function(callback) {
			mongoClient.open(function(error, mongoClient) {
				
				var db = mongoClient.db(databaseName);
				
				db.collection("queues").find().toArray(function(error, queues) {
					callback(queues);
					mongoClient.close();
				});
			});
		},

		findQueue: function(id, callback) {
			mongoClient.open(function(error, mongoClient) {
				
				var db = mongoClient.db(databaseName);
				
				db.collection("queues").findOne({_id: new mongodb.ObjectID(id)}, function(error, queue) {
					callback(queue);
					mongoClient.close();
				});
			});
		},

		saveQueue: function(queue, callback) {
			mongoClient.open(function(error, mongoClient) {
				
				var db = mongoClient.db(databaseName);
				
				db.collection("queues").insert(queue, {w: 1}, function(error, queues) {
					callback(queues[0]);
					mongoClient.close();
				});
			});
		},

		saveStory: function(queueId, story, callback) {
			mongoClient.open(function(error, mongoClient) {
				
				var db = mongoClient.db(databaseName);
				
				db.collection("queues").update({_id: new mongodb.ObjectID(queueId)}, {$push: {stories: story}}, function(error, story) {
					callback(story);
					mongoClient.close();
				});
			});
		}
	};
});
