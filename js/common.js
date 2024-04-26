$(document).ready(function () {

  $(".gnb_menu, .gnb_menu_bg").hide();

  $(".gnb>li").mouseenter(function () {
    $(".gnb_menu,.gnb_menu_bg").stop().slideDown();

  });

  $(".gnb>li").mouseleave(function () {
    $(".gnb_menu,.gnb_menu_bg").stop().slideUp()
  });
}); 