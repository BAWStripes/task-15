define(['jquery','com/gotop','com/carousel','com/waterfall'], function( $,goTop,carousel,waterFall) {
      new goTop($('nav'));
      new carousel.init($('.carousel'),$(window).width(),$(window).height());
      new waterFall.init($('.waterfall'));
});