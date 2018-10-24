new WOW().init();

$('.parallax-window').parallax({imageSrc: 'images/sec1_bg-min.png'});

jQuery(".first-line").fitText(1.2, { minFontSize: '30px', maxFontSize: '72px' });
jQuery(".second-line").fitText(1.2, { minFontSize: '30px', maxFontSize: '72px' });


$('.sec-2-carousel-item a').magnificPopup({
    type: 'image'
    // other options
});


// ----------tab 1--------------//

$('.sec-2-carousel-tab-1').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel1 = e.relatedTarget;
    $('.slide-count-wrap-tab-1').html(carousel1.relative(carousel1.current()) + 1 + '/' + '<span>'+ carousel1.items().length) + '</span>';
}).owlCarousel({
    center: true,
    items:1,
    dots: false,
    loop:true,
});

owl1 = $('.sec-2-carousel-tab-1').owlCarousel();
$(".sec-2-carousel-arrow-right-tab-1").click(function () {
    owl1.trigger('next.owl.carousel');
});
$(".sec-2-carousel-arrow-left-tab-1").click(function () {
    owl1.trigger('prev.owl.carousel');
});



// ----------tab 2--------------//

$('.sec-2-carousel-tab-2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel2 = e.relatedTarget;
    $('.slide-count-wrap-tab-2').html(carousel2.relative(carousel2.current()) + 1 + '/' + '<span>'+ carousel2.items().length) + '</span>';
}).owlCarousel({
    center: true,
    items:1,
    dots: false,
    loop:true,
});

owl2 = $('.sec-2-carousel-tab-2').owlCarousel();
$(".sec-2-carousel-arrow-right-tab-2").click(function () {
    owl2.trigger('next.owl.carousel');
});
$(".sec-2-carousel-arrow-left-tab-2").click(function () {
    owl2.trigger('prev.owl.carousel');
});















// ----------tab 1--------------//
//
// var $gallery_tab_1 = $('.sec-2-carousel-tab-1');
// var slideCount_tab_1 = null;
//
// $( document ).ready(function() {
//     $gallery_tab_1.slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         prevArrow: $('.sec-2-carousel-arrow-left-tab-1'),
//         nextArrow: $('.sec-2-carousel-arrow-right-tab-1'),
//     });
// });
// $gallery_tab_1.on('init', function(event, slick){
//     slideCount_tab_1 = slick.slideCount;
//     setSlideCount();
//     setCurrentSlideNumber(slick.currentSlide);
// });
// $gallery_tab_1.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     setCurrentSlideNumber(nextSlide);
// });
// function setSlideCount() {
//     var $el = $('.slide-count-wrap-tab-1').find('.total-tab-1');
//     $el.text(slideCount_tab_1);
// }
// function setCurrentSlideNumber(currentSlide) {
//     var $el = $('.slide-count-wrap-tab-1').find('.current-tab-1');
//     $el.text(currentSlide + 1);
// }




