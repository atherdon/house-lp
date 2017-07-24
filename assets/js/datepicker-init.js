$(document).ready(function(){

	

	$('.datepicker-input').datepicker({
	    language: "ru"
	});

	var options = {
		show2400: true,
		timeFormat: 'H:i'
		// time from & to
	};

	$('.timepicker-input').timepicker(options);

    
});