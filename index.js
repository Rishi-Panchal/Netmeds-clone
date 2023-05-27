const swiper = new Swiper('.swiper', {
  autoplay:{
      delay:3000,
      disableOnInteraction:false,
  },
  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  

  });


var swiper1 = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});