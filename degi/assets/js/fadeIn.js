'use strict'
{
  $(window).on('load scroll', function() {
    // fadeIn と fadeIn_right の要素をまとめて取得
    const fade = $('.fadeIn_left, .fadeIn_right, .fadeIn');
    
    fade.each(function() {
      const boxoff = $(this).offset().top;
      const wh = $(window).height();
      const scrollTop = $(window).scrollTop();
      
      if (scrollTop > boxoff - wh + 100) {
        $(this).addClass('animated');
      }
    });
  });

}