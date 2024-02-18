// $(".tab_item").not(":first").hide();
// $(".tab").click(function() {
// 	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
// 	$(".tab_item").hide().eq($(this).index()).fadeIn()
// }).eq(0).addClass("active");


$(document).ready(function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    dots: true,
    arrows: false,
    fade: true
    });
  });