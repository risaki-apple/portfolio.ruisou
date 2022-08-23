//topへ移動
$('a[href^="#"]').click(function() {
    var speed = 800;
    var adjust = 79;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
});

//バーガーメニュー
$(function () {
    $('.l-header__btn').on('click', function () {
        $('.l-header__btn').toggleClass('close');
        $('.l-nav').toggleClass('open');
        $('body').toggleClass('noscroll'); // 追記
    });
});

//アニメーション   
$(function () {
  // aimation呼び出し
  if ($('.trans').length) {
      scrollAnimation();
  }
function scrollAnimation() {
  $(window).scroll(function () {
      $(".trans").each(function () {
          let position = $(this).offset().top,
              scroll = $(window).scrollTop(),
              windowHeight = $(window).height();

          if (scroll > position - windowHeight) {
              $(this).addClass('show');
          }
      });
  });
}
$(window).trigger('scroll');
});
