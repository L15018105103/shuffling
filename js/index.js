(function () {
  var index = 0;
  $(".btn_item").click(function () {
    index = $(this).index();
    $(".img_item").eq(index).fadeIn().siblings().fadeOut();
    $(this).addClass("active").siblings().removeClass("active");
  });
  $('.right').click(function () {
    index++;
    if(index > 4){
      index = 0;
    }
    $(".img_item").eq(index).fadeIn().siblings().fadeOut();
    $(".btn_item").eq(index).addClass("active").siblings().removeClass("active");
  });
  $('.left').click(function () {
    index--;
    if(index < 0){
      index = 4;
    }
    $(".img_item").eq(index).fadeIn().siblings().fadeOut();
    $(".btn_item").eq(index).addClass("active").siblings().removeClass("active");
  });
  setInterval(function () {
    index++;
    if(index > 4){
      index = 0;
    }
    $(".img_item").eq(index).fadeIn().siblings().fadeOut();
    $(".btn_item").eq(index).addClass("active").siblings().removeClass("active");
  }, 2000)
})();