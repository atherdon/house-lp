$(document).ready(function(){

	// Put slider into variable to use public functions
    var gallerySlider = $('.characteristics .bxslider').bxSlider({
        // controls: false,
        controls: true,
        pager: false,
        easing: 'easeInSine',
        infiniteLoop: true,
        speed: 500,
        auto: false,
        // auto: true,
        // onSlideAfter: function (currentSlideNumber) {
        //     var currentSlideNumber = gallerySlider.getCurrentSlide();
        //     thumb.removeClass('pager-active');
        //     thumb.eq(currentSlideNumber).addClass('pager-active');
        // },
        // onSlideNext: function () {
        //     var currentSlideNumber = gallerySlider.getCurrentSlide();
        //     slideThumbs(currentSlideNumber, visibleThumbs);
        // },
        // onSlidePrev: function () {
        //     var currentSlideNumber = gallerySlider.getCurrentSlide();
        //     slideThumbs(currentSlideNumber, visibleThumbs);
        // }
    });

})