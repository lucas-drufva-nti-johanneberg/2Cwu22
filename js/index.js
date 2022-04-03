
new fullpage('#fullpage', {
	autoScrolling:true,
	scrollHorizontally: true,
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    slidesPerView: 2,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 45
        },
    },
    centeredSlides: true,
    spaceBetween: 10,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    autoplay: {
        delay: 3000,
      },
  });