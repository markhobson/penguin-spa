/*
 * Error handler for jQuery AJAX requests.
 */
define(["jquery"], function() {
	$("#alert").ajaxError(function(event, request, settings) {
		$(this).html("<div class='alert alert-error'>"
			+ "<button type='button' class='close' data-dismiss='alert'>&times;</button>"
			+ "<strong>Oops!</strong> Cannot reach server (" + settings.url + ")"
			+ "</div>");
	});
});
