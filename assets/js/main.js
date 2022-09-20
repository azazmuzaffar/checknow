var home = $(".home .content-area").offset();
var about = $(".about .content-area").offset();
var projects = $(".projects .content-area").offset();
var team = $(".team .content-area").offset();
var contact = $(".contact .content-area").offset();

$("#fullpage").fullpage({
  anchors: ["Home", "About", "Projects", "Team", "Contact"],
  menu: ".nav-right",
  navigation: false,
  licenseKey: "15560068-077B4EC4-B9C3AECE-631A2B58",
  slidesNavigation: true,
  autoScrolling: false,
  controlArrows: false,
  verticalCentered: true,
  onLeave: function (origin, destination, direction, trigger) {
    setTop(destination.index);
  },
  afterLoad: function (origin, destination, direction, trigger) {
    setTop(destination.index);
  },
});

function setTop(theIndex) {
  if (theIndex == 0) {
    document.getElementById("myMenu").style.top = home.top + 21 + "px";
    $(".two").removeClass("anime-about");
    $(".two").removeClass("anime-projects");
    $(".two").removeClass("anime-team");
    $(".two").removeClass("anime-contact");
    $(".two").addClass("anime-home");
    $(".line").addClass("show");
  } else if (theIndex == 1) {
    document.getElementById("myMenu").style.top = about.top + 10 + "px";
    $(".two").addClass("anime-about");
    $(".two").removeClass("anime-projects");
    $(".two").removeClass("anime-team");
    $(".two").removeClass("anime-contact");
    $(".two").removeClass("anime-home");
    $(".line").removeClass("show");
  } else if (theIndex == 2) {
    document.getElementById("myMenu").style.top = projects.top + 10 + "px";
    $(".two").removeClass("anime-about");
    $(".two").addClass("anime-projects");
    $(".two").removeClass("anime-team");
    $(".two").removeClass("anime-contact");
    $(".two").removeClass("anime-home");
    $(".line").removeClass("show");
  } else if (theIndex == 3) {
    document.getElementById("myMenu").style.top = team.top + 10 + "px";
    $(".two").removeClass("anime-about");
    $(".two").removeClass("anime-projects");
    $(".two").addClass("anime-team");
    $(".two").removeClass("anime-contact");
    $(".two").removeClass("anime-home");
    $(".line").removeClass("show");
  } else if (theIndex == 4) {
    document.getElementById("myMenu").style.top = contact.top + 10 + "px";
    $(".two").removeClass("anime-about");
    $(".two").removeClass("anime-projects");
    $(".two").removeClass("anime-team");
    $(".two").addClass("anime-contact");
    $(".two").removeClass("anime-home");
    $(".line").removeClass("show");
  }
}

$(".nav-toggle").click(function () {
  $(this).toggleClass("opened");
  $(this).parent().parent("nav").toggleClass("mobile-menu");
});

$("nav ul li a").click(function () {
  $(".nav-toggle").removeClass("opened");
  $("nav").removeClass("mobile-menu");
});

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var swipertwo = new Swiper(".projects-slider", {
  slidesPerView: "auto",
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const btn = document.getElementById('btn');
// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
    btn.textContent = 'Button clicked';
});