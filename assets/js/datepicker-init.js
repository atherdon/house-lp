$(document).ready(function(){

	

	$('.datepicker-input').datepicker({
	    language: "ru"
	});

	var options = {
		show2400: true,
		timeFormat: 'H:i'
	};

	$('.timepicker-input').timepicker(options);

    
});