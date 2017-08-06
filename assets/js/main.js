$(document).ready(function(){

	var height = $('.image-wrapper').height();
	$('.image-wrapper').css({
		'width': '600px',
		'height': '600px'
	});

	//nivo lightbox init


    $('#gallery a').nivoLightbox();
    
	$('[data-tooltip="true"]').tooltip();

	// active links
	 $('.nav.navbar-nav.nav-links > li').click(function (e) {
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
        });
	

	// phone mask init

	$("#contactForm input[name='phone']").mask('(000) 000-00-00');

	$("#exampleFormModal input[type='phone']").mask('(000) 000-00-00');

	$("#exampleFormModal2 input[type='phone']").mask('(000) 000-00-00');

	$("#exampleFormModal3 input[type='phone']").mask('(000) 000-00-00');


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
	

})
