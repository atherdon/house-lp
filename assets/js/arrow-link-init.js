$(document).ready(function() {

	var windowWidth  = $(window).width();
	var windowHeight = $(window).height();

	if($('.scrollto').length) {
		$('.scrollto').click(function() {

			$.scrollTo($(this).attr("href"), {duration: 1000, easing:'swing'});
			return false;
		})
	}
	if($('.scrolltoslow').length) {
		$('.scrolltoslow').click(function() {
			
			$.scrollTo($(this).attr("href"), {duration: 2000});
			return false;
		})
	}


	var waypoint1 = new Waypoint({
	  element: $('.left-column h1'),
	  handler: function(direction) {
	    // console.log('Scrolled to waypoint!')

	    $('a.down').fadeIn();
	    
	  },
	});


	var waypoint2 = new Waypoint({
	  element: $('.left-column h2'),
	  handler: function(direction) {
	    // console.log('Scrolled to waypoint!')

	    $('a.down').fadeOut();

	    $('.site-action').fadeOut();


	  },
	});


	var waypoint3 = new Waypoint({
	  element: $('#second'),
	  handler: function(direction) {
	    // console.log('Scrolled to start waypoint!')

	    $('.site-action').show();

	  },
	  offset: '300px'
	});




// // $('.site-action').fadeOut();

// 	var waypoint3 = new Waypoint({
// 	  element: $('#start'),
// 	  handler: function(direction) {
// 	    console.log('Scrolled to start waypoint!')

// 	    // $('body').hide();

// 	    $('.site-action').fadeIn();

// 	    // $('ul.nav > li').removeClass('active');
//          // $(this).addClass('active');
//          // console.log( $('.nav-links a[href="#start"]').parent() )
// 	    // $('.nav-links a[href="#start"]').parent().addClass('active');

// 	  },
// 	  offset: '-100px'
// 	})

// 	var waypoint4 = new Waypoint({
// 	  element: $('#communication'),
// 	  handler: function(direction) {
// 	    console.log('Scrolled to communication waypoint!')

// 	    // $('body').hide();

// 	    // $('.site-action').fadeIn();

// 	    // $('ul.nav > li').removeClass('active');
//          // $(this).addClass('active');
//          // console.log( $('.nav-links a[href="#communication"]').parent() )
// 	    // $('.nav-links a[href="#communication"]').parent().addClass('active');

// 	  },
// 	  offset: '300px'
// 	})

	

// var waypoint = new Waypoint({
//   element: $('#second'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')

//     $('.site-action').fadeOut();

//   },
//   // offset: '600px'
// })

	/* Waypoints on the arrowdown link - make it dissapear when we're not on #start */
	// function arrowdown() {

	// 	console.log('0');

	// 	if(windowWidth >= 480) {
	// 		$('#start').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	// 			console.log('123');
	// 		  if (isInView) {
	// 		    if (visiblePartY == 'bottom') {
	// 		      $('a.down').fadeOut();
	// 		    } 
	// 		    else {
	// 		      $('a.down').fadeIn();
	// 		    } 
	// 		  } 
	// 		});
	// 	}
	// }
	// arrowdown();

	// $(window).resize(function(){
	// 	// setHeaderHeight();
	// 	// if(windowWidth > 480) {
			
	// 	// }
	// 	// else {
	// 	// 	$('.subheader-container .wrapper').css('height', 'auto' );
	// 	// }
	// 	arrowdown();
	// 	// setNavTopOffset();
	// })

});