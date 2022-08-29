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

//アニメーション(全体)
$(function () {
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

//アニメーション(文字用)
$(function () {
  //aimation呼び出し
  //p-mainvisual__title アニメーション
  //付与したいクラスの配列
  var arr = ["upperRight", "lowerRight", "lowerLeft", "upperLeft"];
  var a = arr.length;

  //シャッフルアルゴリズム
  while (a) {
    var j = Math.floor(Math.random() * a);
    var t = arr[--a];
    arr[a] = arr[j];
    arr[j] = t;
  }

  //シャッフルされた配列の要素を順番に表示する
  arr.forEach(function (value, index) {
    $(".p-mainvisual__title__box").eq(index).addClass(value);
  });

  const textAnimation = () => {
    
    if ($('.p-mainvisual__title__box').length) {
        scrollAnimation();
    }
    function scrollAnimation() {
      $(window).scroll(function () {
          $(".p-mainvisual__title__box").each(function () {
              let position = $(this).offset().top,
                  scroll = $(window).scrollTop(),
                  windowHeight = $(window).height();
    
              if (scroll > position - windowHeight + 300) {
                  $(this).addClass('show');
              }
          });
      });
    }
    $(window).trigger('scroll');
    
  }
  //1,250ミリ秒後にcountUp関数を呼び出す処理を追加
  setTimeout(textAnimation, 1250);
  });