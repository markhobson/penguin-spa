// Queue View

$(function() {
	
	var Queue = Backbone.Model.extend({
		
	});
	
	var Queues = Backbone.Collection.extend({
		
		url: "/api/queues",
		
		model: Queue
		
	});
	
	var QueueView = Backbone.View.extend({
		
		model: new Queue(),
		
		tagName: "li",
		
		template: _.template($("#queueTemplate").html()),
			
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
	
	var QueuesView = Backbone.View.extend({
		
		model: new Queues(),
		
		tagName: "ul",
		
		initialize: function() {
			this.model.bind("reset", this.render, this);
			this.model.fetch();
		},
		
		render: function() {
			this.$el.empty();
			_.each(this.model.models, function(item) {
				var itemView = new QueueView({model: item});
				this.$el.append(itemView.render().el);
			}, this);
			return this;
		},
		
	});
	
	$("#content").html(new QueuesView().render().el);
});
