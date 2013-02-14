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

		createStory: function(queueId, story, callback) {
			story._id = new mongodb.ObjectID();
			var queueOid = new mongodb.ObjectID(queueId);
			client.connect(url, function(error, db) {
				db.collection(queuesName).update({_id: queueOid}, {$push: {stories: story}}, {w: 1}, function(error, count) {
					callback(story);
					db.close();
				});
			});
		}
	};
});
