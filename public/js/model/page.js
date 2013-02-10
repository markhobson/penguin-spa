/*
 * View model for data shared across all pages.
 */
define(["knockout"], function(ko) {
	
	var model = {
		/*
		 * The template name of the currently visible page.
		 */
		show: ko.observable(),
		
		// TODO: remove when Knockout can bind template name to observable
		showValue: function() {
			return model.show();
		}
	};
	
	ko.applyBindings(model);
	
	return model;
});
