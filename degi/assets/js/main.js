"user strict";
{
  // ハンバーガーメニュー
  $(".nav__menu").click(function () {
    $(this).toggleClass('active');
  });

  $(".nav__menu").click(function () {
    $(".nav__list").toggleClass('active');
  });

// スライダー　フットサル
  $('.slider-for.futsal').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav.futsal',
  });
  $('.slider-nav.futsal').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for.futsal',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
// スライダー　大浴場
  $('.slider-for.bath').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav.bath',
  });
  $('.slider-nav.bath').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for.bath',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
// スライダー　レストラン
  $('.slider-for.restaurant').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav.restaurant',
  });
  $('.slider-nav.restaurant').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for.restaurant',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
  // TOPメインビジュアル
  $('.slide-main').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  });
  // レストランスライダー
  $('.slide-restaurant').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
  });
}

