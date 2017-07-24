$(document).ready(function(){

	

	$('.datepicker-input').datepicker({
	    language: "ru",
	    orientation: "bottom"
	});

	var options = {
		show2400: true,
		timeFormat: 'H:i'
		// time from & to
	};

	$('.timepicker-input').timepicker(options);

	
	$('.navbar-contact.phone').on('click', function(){

		return false;
		// $('#exampleFormModal').modal();	

	});

    $(".js-select-placeholder").select2({
  		placeholder: "Месяц",
  		minimumResultsForSearch: Infinity
	});

});