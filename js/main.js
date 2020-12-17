$(document).ready(function(){
 var hotelslider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  effect: "coverflow",
})

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  }, 
})

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function (){
  document
  .querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom--visible") 
}); 

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on('click', closeModal);

function openModal(){
  var targetModal = $(this).attr("data-href");
  var body = $("body");

  $(targetModal).find(".modal__overlay").addClass('modal__overlay--visible');
  $(targetModal).find(".modal__dialog").addClass('modal__dialog--visible');
  body.addClass("scroll-hidden");
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  var body = $("body");

  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
  //$(modal_overlay).modal({ backdrop: 'static', keyboard: false });
  body.removeClass("scroll-hidden");
}

});