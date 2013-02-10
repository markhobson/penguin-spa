/*
 * MongoDB data layer.
 */
define(["mongodb"], function(mongodb) {
	
	var client = mongodb.MongoClient;
	var url = "mongodb://localhost:27017/penguin";
	var queuesName = "queues";

	return {
		
		findQueues: function(callback) {
			client.connect(url, function(error, db) {
				db.collection(queuesName)
					.find()
					.toArray(function(error, queues) {
						callback(queues);
						db.close();
					});
			});
		},

		findQueue: function(id, callback) {
			client.connect(url, function(error, db) {
				db.collection(queuesName)
					.findOne({_id: new mongodb.ObjectID(id)}, function(error, queue) {
						callback(queue);
						db.close();
					});
			});
		},

		saveQueue: function(queue, callback) {
			client.connect(url, function(error, db) {
				db.collection(queuesName)
					.insert(queue, {w: 1}, function(error, queues) {
						callback(queues[0]);
						db.close();
					});
			});
		},

		saveStory: function(queueId, story, callback) {
			client.connect(url, function(error, db) {
				db.collection(queuesName)
					.update({_id: new mongodb.ObjectID(queueId)}, {$push: {stories: story}}, function(error, story) {
						callback(story);
						db.close();
					});
			});
		}
	};
});
