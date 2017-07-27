$(document).ready(function(){

	// Put slider into variable to use public functions
    var gallerySlider2 = $('#bxslider').bxSlider({
        
        pager: false,
        easing: 'easeInOutQuint',
        infiniteLoop: false,
        speed: 500,
        auto: false,
        // auto: true,

        /* Controls must be true */
        controls: true,

        /* Class selectors from step 1 */
        nextSelector: '.plans-wrapper .bxNext',
        prevSelector: '.plans-wrapper .bxPrev',

        /* Here's the heart of how to customize nav arrows.
         || Enter a HTML string for both prevText and nextText.
         || Here I used Font-Awesome icons. Sprites are commonly
         || used, but try to use only one element per option.
         */
        nextText: '<i class="fa fa-chevron-circle-right fa-3x"></i>',
        prevText: '<i class="fa fa-chevron-circle-left fa-3x"></i>',
        // nextText: '<i class="fa fa-arrow-circle-right fa-3x"></i>',
        // prevText: '<i class="fa fa-arrow-circle-left fa-3x"></i>',

        wrapperClass: '.plans-wrapper',
        adaptiveHeight: true
       
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
        infiniteLoop: true,
        speed: 500,
        auto: false,
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
        nextSelector: '.gallery-container.slider .bxNext',
        prevSelector: '.gallery-container.slider .bxPrev',

        /* Here's the heart of how to customize nav arrows.
         || Enter a HTML string for both prevText and nextText.
         || Here I used Font-Awesome icons. Sprites are commonly
         || used, but try to use only one element per option.
         */
        nextText: '<i class="fa fa-chevron-circle-right fa-3x"></i>',
        prevText: '<i class="fa fa-chevron-circle-left fa-3x"></i>',
        // nextText: '<i class="fa fa-arrow-circle-right fa-3x"></i>',
        // prevText: '<i class="fa fa-arrow-circle-left fa-3x"></i>',

        wrapperClass: '.gallery-container.slider',
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

        slideWidth: 400,
        slideMargin: 10
        // slideWidth: 100,
        // adaptiveHeight: true
    });
    // Function to calculate which slide to move the thumbs to
    // function slideThumbs(currentSlideNumber, visibleThumbs) {
    //     // Calculate the first number and ignore the remainder
    //     var m = Math.floor(currentSlideNumber / visibleThumbs);
    //     // Multiply by the number of visible slides to calculate the exact slide we need to move to
    //     var slideTo = m * visibleThumbs;
    //     // Tell the slider to move
    //     thumbsSlider.goToSlide(m);
    // }
    
    // When you click on a thumb
    $('#gallery-thumbs').find('.thumb').click(function () {
        // Remove the active class from all thumbs
        $('#gallery-thumbs').find('.thumb').removeClass('pager-active');
        // Add the active class to the clicked thumb
        $(this).addClass('pager-active');
    });
}


});
