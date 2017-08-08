$(document).ready(function() { 
	

	 $('.nav.navbar-nav.nav-links > li').click(function (e) {
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
    });  
	 
});
