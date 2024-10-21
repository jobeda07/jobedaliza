//mixitup
$('#grid').mixitup();

//aos animation
AOS.init();

//fancybox
$('[data-fancybox]').fancybox({
  // Options will go here
  buttons: [
    'close'
  ],
  wheel: false,
  transitionEffect: "slide",
  // thumbs          : false,
  // hash            : false,
  loop: true,
  // keyboard        : true,
  toolbar: false,
  // animationEffect : false,
  // arrows          : true,
  clickContent: false
});

// 3d hover effect
$(document).ready(function () {
  $(".project").hover3d({
    selector: ".project__card"
  });
});

// scale on hover
$('.js-tilt').tilt({
  scale: 1.2
})

// back to top button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Portfolio Active Button
$(document).ready(function () {
  $('ul li a').click(function () {
    $('li a').removeClass("active");
    $(this).addClass("active");
  });
});


// header sticky
// $(window).on('scroll', function () {
//   var scroll = $(window).scrollTop();
//   if (scroll < 300) {
//     $(".header-sticky").removeClass("sticky");
//   } else {
//     $(".header-sticky").addClass("sticky");
//   }
// });
