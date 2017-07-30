$(document).ready(function(){


	$.map( $('.datepicker-input'), function( val, i ) {

	   	$(val).datepicker({
			language: "ru",
			orientation: "bottom"
			});
	});



	var options = {
		show2400: true,
		timeFormat: 'H:i'
		// time from & to
	};

	
	$.map( $('.timepicker-input'), function( val, i ) {

	   	$(val).timepicker(options);
	});

	$.map( $("select[name='month']"), function( val, i ) {


	   	$(val).select2({
	  		placeholder: function(){
		        $(val).data('placeholder');
		    },
	  		minimumResultsForSearch: Infinity,
	  		 width: 'element'
		});

	});



});