// nav-hover
$(".nav-link").on("mouseover", function () {
  $(this).addClass("nav-link-hover");
});

$(".nav-link").on("mouseout", function () {
  $(this).removeClass("nav-link-hover");
});

$(".navbar-brand").on("mouseover", function () {
  $(this).addClass("navbar-brand-hover");
});

$(".navbar-brand").on("mouseout", function () {
  $(this).removeClass("navbar-brand-hover");
});

// auto scroll on page for pricing section

$("#pricing_scroll").click(function (event) {
  event.preventDefault();
  var offset_val = $("#pricing").offset().top;
  $("html,body").animate(
    {
      scrollTop: offset_val,
    },
    200
  );
});


// hover on red-btns


$(".heart_mar").mouseover(function(){
  $(this).addClass("heart_mar_hover");
  $(this).find(".red_btn").addClass("red_btn_hover");
});
$(".heart_mar").mouseout(function(){
  $(this).removeClass("heart_mar_hover");
  $(this).find(".red_btn").removeClass("red_btn_hover");
});


// notiify button click

$(".notify-btn").click(function(){
  $(".notify-btn").hide();
  $("#success").show();
})

// revert back home click 

$(".revertHome").click(function(){
  window.location.href="index.html"; 
})


