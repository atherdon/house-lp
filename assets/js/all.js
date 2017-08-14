/*!
 * Lightbox v2.9.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.lightbox=b(a.jQuery)}(this,function(a){function b(b){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=a.extend({},this.constructor.defaults),this.option(b)}return b.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},b.prototype.option=function(b){a.extend(this.options,b)},b.prototype.imageCountLabel=function(a,b){return this.options.albumLabel.replace(/%1/g,a).replace(/%2/g,b)},b.prototype.init=function(){var b=this;a(document).ready(function(){b.enable(),b.build()})},b.prototype.enable=function(){var b=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){return b.start(a(c.currentTarget)),!1})},b.prototype.build=function(){var b=this;a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")),this.$lightbox=a("#lightbox"),this.$overlay=a("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",function(){return b.end(),!1}),this.$lightbox.hide().on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$outerContainer.on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===b.currentImageIndex?b.changeImage(b.album.length-1):b.changeImage(b.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return b.currentImageIndex===b.album.length-1?b.changeImage(0):b.changeImage(b.currentImageIndex+1),!1}),this.$nav.on("mousedown",function(a){3===a.which&&(b.$nav.css("pointer-events","none"),b.$lightbox.one("contextmenu",function(){setTimeout(function(){this.$nav.css("pointer-events","auto")}.bind(b),0)}))}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return b.end(),!1})},b.prototype.start=function(b){function c(a){d.album.push({link:a.attr("href"),title:a.attr("data-title")||a.attr("title")})}var d=this,e=a(window);e.on("resize",a.proxy(this.sizeOverlay,this)),a("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var f,g=0,h=b.attr("data-lightbox");if(h){f=a(b.prop("tagName")+'[data-lightbox="'+h+'"]');for(var i=0;i<f.length;i=++i)c(a(f[i])),f[i]===b[0]&&(g=i)}else if("lightbox"===b.attr("rel"))c(b);else{f=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(var j=0;j<f.length;j=++j)c(a(f[j])),f[j]===b[0]&&(g=j)}var k=e.scrollTop()+this.options.positionFromTop,l=e.scrollLeft();this.$lightbox.css({top:k+"px",left:l+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&a("body").addClass("lb-disable-scrolling"),this.changeImage(g)},b.prototype.changeImage=function(b){var c=this;this.disableKeyboardNav();var d=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),a(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var e=new Image;e.onload=function(){var f,g,h,i,j,k,l;d.attr("src",c.album[b].link),f=a(e),d.width(e.width),d.height(e.height),c.options.fitImagesInViewport&&(l=a(window).width(),k=a(window).height(),j=l-c.containerPadding.left-c.containerPadding.right-c.imageBorderWidth.left-c.imageBorderWidth.right-20,i=k-c.containerPadding.top-c.containerPadding.bottom-c.imageBorderWidth.top-c.imageBorderWidth.bottom-120,c.options.maxWidth&&c.options.maxWidth<j&&(j=c.options.maxWidth),c.options.maxHeight&&c.options.maxHeight<j&&(i=c.options.maxHeight),(e.width>j||e.height>i)&&(e.width/j>e.height/i?(h=j,g=parseInt(e.height/(e.width/h),10),d.width(h),d.height(g)):(g=i,h=parseInt(e.width/(e.height/g),10),d.width(h),d.height(g)))),c.sizeContainer(d.width(),d.height())},e.src=this.album[b].link,this.currentImageIndex=b},b.prototype.sizeOverlay=function(){this.$overlay.width(a(document).width()).height(a(document).height())},b.prototype.sizeContainer=function(a,b){function c(){d.$lightbox.find(".lb-dataContainer").width(g),d.$lightbox.find(".lb-prevLink").height(h),d.$lightbox.find(".lb-nextLink").height(h),d.showImage()}var d=this,e=this.$outerContainer.outerWidth(),f=this.$outerContainer.outerHeight(),g=a+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right,h=b+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;e!==g||f!==h?this.$outerContainer.animate({width:g,height:h},this.options.resizeDuration,"swing",function(){c()}):c()},b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},b.prototype.updateNav=function(){var a=!1;try{document.createEvent("TouchEvent"),a=this.options.alwaysShowNavOnTouchDevices?!0:!1}catch(b){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(a&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),a&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),a&&this.$lightbox.find(".lb-next").css("opacity","1"))))},b.prototype.updateDetails=function(){var b=this;if("undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title){var c=this.$lightbox.find(".lb-caption");this.options.sanitizeTitle?c.text(this.album[this.currentImageIndex].title):c.html(this.album[this.currentImageIndex].title),c.fadeIn("fast").find("a").on("click",function(b){void 0!==a(this).attr("target")?window.open(a(this).attr("href"),a(this).attr("target")):location.href=a(this).attr("href")})}if(this.album.length>1&&this.options.showImageNumberLabel){var d=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(d).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return b.sizeOverlay()})},b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var a=new Image;a.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var b=new Image;b.src=this.album[this.currentImageIndex-1].link}},b.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))},b.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")},b.prototype.keyboardAction=function(a){var b=27,c=37,d=39,e=a.keyCode,f=String.fromCharCode(e).toLowerCase();e===b||f.match(/x|o|c/)?this.end():"p"===f||e===c?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):("n"===f||e===d)&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},b.prototype.end=function(){this.disableKeyboardNav(),a(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),a("select, object, embed").css({visibility:"visible"}),this.options.disableScrolling&&a("body").removeClass("lb-disable-scrolling")},new b});
//# sourceMappingURL=lightbox.min.map;$(document).ready(function(){


    
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
		timeFormat: 'H:i',

		// 'minTime': '10:00am',
  //   	'maxTime': '5:30pm',
		
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
	

});;$(document).ready(function(){

	// Put slider into variable to use public functions
    var gallerySlider2 = $('#bxslider').bxSlider({
        
        pager: false,
        easing: 'easeInOutQuint',
        infiniteLoop: false,
        speed: 500,
        auto: false,

        slideWidth: 580,
        // auto: true,

        /* Controls must be true */
        controls: true,

        /* Class selectors from step 1 */
        // nextSelector: '.plans-wrapper .bxNext',
        // prevSelector: '.plans-wrapper .bxPrev',

        /* Here's the heart of how to customize nav arrows.
         || Enter a HTML string for both prevText and nextText.
         || Here I used Font-Awesome icons. Sprites are commonly
         || used, but try to use only one element per option.
         */
        nextText: '<i class="fa fa-chevron-circle-right fa-6x"></i>',
        prevText: '<i class="fa fa-chevron-circle-left fa-6x"></i>',
        // nextText: '<i class="fa fa-arrow-circle-right fa-3x"></i>',
        // prevText: '<i class="fa fa-arrow-circle-left fa-3x"></i>',

        wrapperClass: 'plans-wrapper',
        // adaptiveHeight: true
       
    });


// If there are gallery thumbs on the page
if ($('#gallery-thumbs').length > 0) {

    // Cache the thumb selector for speed
    var thumb = $('#gallery-thumbs').find('.thumb');

    // How many thumbs do you want to show & scroll by
    var visibleThumbs = 5;

    // Put slider into variable to use public functions
    var gallerySlider = $('#gallery').bxSlider({
        // controls: false,
        // controls: true,

        pager: false,
        easing: 'easeInOutQuint',
        infiniteLoop: false,
        speed: 500,
        auto: false,

        // slideWidth: 680,

        // auto: true,
        onSlideAfter: function (currentSlideNumber) {
            var currentSlideNumber = gallerySlider.getCurrentSlide();
            thumb.removeClass('pager-active');
            thumb.eq(currentSlideNumber).addClass('pager-active');
        },
        onSlideNext: function () {
            var currentSlideNumber = gallerySlider.getCurrentSlide();
            slideThumbs(currentSlideNumber, visibleThumbs);
        },
        onSlidePrev: function () {
            var currentSlideNumber = gallerySlider.getCurrentSlide();
            slideThumbs(currentSlideNumber, visibleThumbs);
        },

         /* Controls must be true */
        controls: true,

        /* Class selectors from step 1 */
        // nextSelector: '.gallery-container.slider .bxNext',
        // prevSelector: '.gallery-container.slider .bxPrev',

        /* Here's the heart of how to customize nav arrows.
         || Enter a HTML string for both prevText and nextText.
         || Here I used Font-Awesome icons. Sprites are commonly
         || used, but try to use only one element per option.
         */
        nextText: '<i class="fa fa-chevron-circle-right fa-6x"></i>',
        prevText: '<i class="fa fa-chevron-circle-left fa-6x"></i>',
        // nextText: '<i class="fa fa-arrow-circle-right fa-3x"></i>',
        // prevText: '<i class="fa fa-arrow-circle-left fa-3x"></i>',

        wrapperClass: 'gallery-wrapper',
        adaptiveHeight: true
    });

    // When clicking a thumb
    thumb.click(function (e) {
        // -6 as BX slider clones a bunch of elements
        gallerySlider.goToSlide($(this).closest('.thumb-item').index());
        // Prevent default click behaviour
        e.preventDefault();
    });


    // Thumbnail slider
    var thumbsSlider = $('#gallery-thumbs').bxSlider({
        controls: false,
        pager: false,

        easing: 'easeInOutQuint',
        infiniteLoop: false,
        minSlides: 5,
        maxSlides: 2,

        slideWidth: 680,
        slideMargin: 10,


        wrapperClass: '.gallery-container.slider',
        // slideWidth: 100,
        // adaptiveHeight: true
    });

    // Function to calculate which slide to move the thumbs to
    function slideThumbs(currentSlideNumber, visibleThumbs) {
        // Calculate the first number and ignore the remainder
        var m = Math.floor(currentSlideNumber / visibleThumbs);
        // Multiply by the number of visible slides to calculate the exact slide we need to move to
        var slideTo = m * visibleThumbs;
        // Tell the slider to move
        thumbsSlider.goToSlide(m);
    }
    
    // When you click on a thumb
    $('#gallery-thumbs').find('.thumb').click(function () {
        // Remove the active class from all thumbs
        $('#gallery-thumbs').find('.thumb').removeClass('pager-active');
        // Add the active class to the clicked thumb
        $(this).addClass('pager-active');
    });


}


});
;$(document).ready(function() { 
    
    
    /* Map */
    if($('#themap').length) {
        
        var map;
        var MY_MAPTYPE_ID = 'custom_style';

        function initialize() {

          var featureOpts = [
              {
                "featureType": "poi.park",
                "stylers": [
                  { "lightness": 36 },
                  { "saturation": -100 }
                ]
              },{
                "featureType": "poi.government",
                "stylers": [
                  { "saturation": -100 }
                ]
              },{
                "featureType": "poi.attraction",
                "stylers": [
                  { "saturation": -100 }
                ]
              },{
                "featureType": "poi.school",
                "stylers": [
                  { "lightness": 29 },
                  { "saturation": -100 }
                ]
              },{
                "featureType": "water"  },{
                "featureType": "water",
                "stylers": [
                  { "color": "#27ac80" }
                ]
                }
  
            ];

          var mapOptions = {
            draggable: true,
            zoom: 15,
            center: new google.maps.LatLng(44.5911767, 33.5057976),
            // center: new google.maps.LatLng(48.855, 2.341418),
            
            scrollwheel: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
              },
            mapTypeId: MY_MAPTYPE_ID
          };

          map = new google.maps.Map(document.getElementById('themap'),
              mapOptions);

          var styledMapOptions = {
            name: 'Адрес дома'
          };

          var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h3 id="firstHeading" class="mt20">Наш адрес</h3>'+
          '<div id="bodyContent">'+
          '<p>г.Севастополь<br>Симферопольская улица, 29<br> Телефон: +7 (916) 883 08 40</p>'+
          '</div>'+
          '</div>';

        var infowindow = new google.maps.InfoWindow({
              content: contentString
          });
          var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
              map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
            // var myLatLng = new google.maps.LatLng(48.855, 2.341418);
            var myLatLng = new google.maps.LatLng(44.5911767, 33.5057976);
             // center: new google.maps.LatLng(44.588028, 33.4960235),
            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'Запишитесь на просмотр дома!'
            });

            google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
   
  
  
    
});;$(document).ready(function() {
    

    // 'Введите данные в поля формы'

    // 'Введите свое имя'
    // 'Введите контактный телефон'
    // 'Введите дату',
    // 'Выберите месяц',
    // 'Введите время'


    // 'Введите email адрес'
    // 'Введите контактный телефон'

    /* Contact Form */
    if($('#contactForm').length) {

        var error = $('#contactForm div.error');


        $("#contactForm").validate({

            rules: {
                name:  "required", //{required:true, minlength:3}
                phone: "required",
                date:  "required",
                month: "required",
                time:  "required"

            },
            messages: {
                name:  'Введите свое имя',
                phone: 'Введите контактный телефон',
                date:  'Введите дату',
                month: 'Выберите месяц',
                time:  'Введите время'
            },


            invalidHandler: function(event, validator) {
              // 'this' refers to the form
              var errors = validator.numberOfInvalids();
              if (errors) {

                var message = errors == 1
                  ? 'You missed 1 field. It has been highlighted'
                  : 'You missed ' + errors + ' fields. They have been highlighted';

                
                error.html(message);
                error.fadeIn();

              } else {

                error.hide();
                
              }
            },
            showErrors: false,
            errorPlacement: function(error,element) {
                return true;
            },
            submitHandler: function(form) { 
                jQuery(form).ajaxSubmit({
                    url: 'process.php', 
                    success: function() {

                        // var message = 'Thank\'s for your message. We\'ll answer as soon as possible.';

                        // error.html(message);
                        // error.fadeIn();

                        // $("div.error").html(message);
                        // $("div.error").fadeIn();
                    },
                    error: function() {
                        alert('Something`s wrong.');
                    }
                });
            }
        
        });
    }



    /* Modal1 */
    if($('#FormModal1').length) {



        var form  = $("#FormModal1");
        var error2 = $("#FormModal1").find('.error'); 

        $("#FormModal1").validate({

            rules: {
                name:  "required",
                phone: "required",
                date:  "required",
                month: "required",
                time:  "required"

            },
            messages: {
                name:  'Введите свое имя',
                phone: 'Введите контактный телефон',
                date:  'Введите дату',
                month: 'Выберите месяц',
                time:  'Введите время'
            },

            invalidHandler: function(event, validator) {
              // 'this' refers to the form
              var errors = validator.numberOfInvalids();
              if (errors) {
                
                var message = errors == 1
                  ? 'You missed 1 field. It has been highlighted'
                  : 'You missed ' + errors + ' fields. They have been highlighted';

                error2.html(message);
                error2.fadeIn();  
                

              } else {

                error2.hide();

              }
            },
            showErrors: false,
            errorPlacement: function(error,element) {
                return true;
            },
            submitHandler: function(form) {             

                jQuery(form).ajaxSubmit({
                    url: 'process.php', 
                    success: function() {

                        // var message = 'Thank\'s for your message. We\'ll answer as soon as possible.';
                        
                        // error2.html(message);
                        // error2.fadeIn();
                        
                    },
                    error: function() {

                        alert('Something`s wrong.');

                    }
                });
            }
        
        });
    }

    /* Modal2 */
    if($('#FormModal21').length) {

        var error3 = $("#FormModal21").find('.error'); 

        $("#FormModal21").validate({

            rules: {
                name:  "required",
                phone: "required",
                date:  "required",
                month: "required",
                time:  "required"

            },
            messages: {
                name:  'Введите свое имя',
                phone: 'Введите контактный телефон',
                date:  'Введите дату',
                month: 'Выберите месяц',
                time:  'Введите время'
            },

            invalidHandler: function(event, validator) {
              // 'this' refers to the form
              var errors = validator.numberOfInvalids();
              if (errors) {
                
                var message = errors == 1
                  ? 'You missed 1 field. It has been highlighted'
                  : 'You missed ' + errors + ' fields. They have been highlighted';

                error3.html(message);
                error3.fadeIn();
                
              } else {
                error3.hide();
                
              }
            },
            showErrors: false,
            errorPlacement: function(error,element) {
                return true;
            },
            submitHandler: function(form) { 
                jQuery(form).ajaxSubmit({
                    url: 'process.php', 
                    success: function() {

                        // var message = 'Thank\'s for your message. We\'ll answer as soon as possible.';
                        // error3.html(message);
                        // error3.fadeIn();

                        // $("div.error").html(message);
                        // $("div.error").fadeIn();

                    },
                    error: function() {

                        alert('Something`s wrong.');

                    }
                });
            }
        
        });
    }    


    /* Modal3 */
    if($('#FormModal31').length) {

        var error4 = $("#FormModal31").find('.error'); 

        $("#FormModal31").validate({

            rules: {
                email:  "required",
                phone:  "required"

            },
            messages: {
                email:  'Введите email адрес',
                phone:  'Введите контактный телефон',
               
            },

            invalidHandler: function(event, validator) {
              // 'this' refers to the form
              var errors = validator.numberOfInvalids();
              if (errors) {
                
                var message = errors == 1
                  ? 'You missed 1 field. It has been highlighted'
                  : 'You missed ' + errors + ' fields. They have been highlighted';

                error4.html(message);
                error4.fadeIn();
                
              } else {
                error4.hide();
                
              }
            },
            showErrors: false,
            errorPlacement: function(error,element) {
                return true;
            },
            submitHandler: function(form) { 
                jQuery(form).ajaxSubmit({
                    url: 'process.php', 
                    success: function() {

                        // var message = 'Thank\'s for your message. We\'ll answer as soon as possible.';
                        // error4.html(message);
                        // error4.fadeIn();

                        
                    },
                    error: function() {

                        alert('Something`s wrong.');
                        
                    }
                });
            }
        
        });
    }    


});
;$(document).ready(function() {

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