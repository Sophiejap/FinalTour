var swiper2 = new Swiper(".mySwip", {
    slidesPerGroup: 1,
    loop:true,
    loopFillGroupWithBlank: true,
   navigation: {
      nextEl: ".righ",
     
    },
   breakpoints:{
      1200:{ slidesPerView: 3,
      spaceBetween: 20,
    },
    993:{
      slidesPerView:3,
      spaceBetween: 30,
    },
    576:{ slidesPerView: 2,
      spaceBetween: 10,
       },
    300:{
     slidesPerView: 1,
    spaceBetween: 0,}}
  });


