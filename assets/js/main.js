$(document).ready(function(){
    
	$('[data-tooltip="true"]').tooltip();

	// active links
	$('.nav.navbar-nav.nav-links > li').click(function (e) {
		e.preventDefault();
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');                
	});
	

	// phone mask init
	$("#contactForm input[type='tel']").mask('(000) 000-00-00');

	$("#FormModal input[type='tel']").mask('(000) 000-00-00');

	$("#FormModal2 input[type='tel']").mask('(000) 000-00-00');

	$("#FormModal3 input[type='tel']").mask('(000) 000-00-00');



	$.map( $("select[name='month']"), function( val, i ) {

	   	$(val).select2({
	  		placeholder: function(){
		        $(val).data('placeholder');
		    },
	  		minimumResultsForSearch: Infinity,
	  		width: 'element'
		});

	});

	$.map( $('.datepicker-input'), function( val, i ) {


	   	$(val).datepicker({
			language: "ru",
			orientation: "bottom"


		}).on('change', function(e){

			var month = new Date(e.timeStamp).getMonth() + 1;
			var $monthSelect2 = $(val).closest('.row').find('select[name="month"]').select2();
			$monthSelect2.val(month).trigger("change");


		});
	});



	var options = {
		show2400: true,
		timeFormat: 'H:i',

		'minTime': '9:00am',
    	'maxTime': '9:00pm',
		
	};

	
	$.map( $('.timepicker-input'), function( val, i ) {

	   	$(val).timepicker(options);
	});


	

});