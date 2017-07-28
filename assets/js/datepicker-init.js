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

	
	// $('.navbar-contact.phone').on('click', function(){

	// 	return false;
	// 	// $('#exampleFormModal').modal();	

	// });


	$.map( $("select[name='month']"), function( val, i ) {
		// $(val).select2();
		console.log( $(val).data().placeholder );

	   	$(val).select2({
	  		// placeholder: "Месяц",
	  		// placeholder: $(val).attr('placeholder'),
	  		placeholder: function(){
		        $(val).data('placeholder');
		    },
	  		minimumResultsForSearch: Infinity,
	  		 width: 'element'
		});

	});

});