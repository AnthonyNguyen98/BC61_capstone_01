// move top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// end move top
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#site-header").addClass("nav-fixed");
  } else {
    $("#site-header").removeClass("nav-fixed");
  }
});

$(".navbar-toggler").on("click", function () {
  $("header").toggleClass("active");
});
$(document).on("ready", function () {
  if ($(window).width() > 991) {
    $("header").removeClass("active");
  }
  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      $("header").removeClass("active");
    }
  });
});
