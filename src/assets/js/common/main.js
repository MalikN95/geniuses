$(document).ready(function () {
  let $preloader = $("#page-preloader");
  $preloader.fadeOut(1000);

  /* $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
      $(".header").addClass(".header__active");
    } else {
      $(".header").removeClass(".header__active");
    }
  }); */

  /* AOS.init({
    once: true,
    anchorPlacement: "bottom-bottom",
    duration: 800,
  });

  onElementHeightChange(document.body, function () {
    AOS.refresh();
  }); */

  /* $("a.go").click(function (e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  }); */
  var coursesMob = new Swiper(".courses-mob", {
    spaceBetween: 15,
  });
  var teacherMob = new Swiper(".teacher-mob", {
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  document.querySelector('.menu__box').onclick = function(){
    document.querySelector('#menu__toggle').checked = false
  }
  document.querySelector('.wrapper, main').onclick = function(){
    document.querySelector('#menu__toggle').checked = false
  }
  document.querySelector('#menu__toggle').onclick = function(){
    document.querySelector('.menu__box').style.visibility = 'visible'
  }
});
