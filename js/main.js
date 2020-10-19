
function h() {
   let h = $(window).height();
   if (h < 590) {
      h = 590;

   }
   $('.first-screen').css('min-height', h + 'px');
   //$('.layer-2').css('height', h + 'px');
   //$('.layer-1').css('height', h + 'px');
}
h();
$(window).on('resize', h);

/*
$(window).resize(function (event) {
   mainblock();
});
function mainblock() {
   var h = $(window).outerHeight();
   $('.first-screen').css('min-height', h);
}
mainblock();
*/
/*
$(window).scroll(function (event) {
   var s = 0 - $(this).scrollTop() / 4;

   $('.layer-1').css('transform', 'translate3d(0, ' + s + 'px, 0)');
   $('.layer-2').css('transform', 'translate3d(0, ' + s + 'px, 0)');
});
*/

function ibg() {
   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}
ibg();

$(document).ready(function () {

   $('.screen-4__items').slick({

      slidesToShow: 10,
      slidesToScroll: 2,
      infinite: true,
      centerPadding: '10px',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      waitForAnimate: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 8,

            }
         },
         {
            breakpoint: 480,
            settings: {
               centerMode: true,

            }
         }
      ],
   });
});
