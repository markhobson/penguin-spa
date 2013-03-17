/*
 * View model for data shared across all pages.
 */
define(["knockout"], function(ko) {
	
	var model = {};
	
	// the template name of the currently visible page
	model.show = ko.observable();
		
	// TODO: remove when Knockout can bind template name to observable
	model.showValue = function() {
		return model.show();
	};
	
	ko.applyBindings(model);
	
	return model;
});
