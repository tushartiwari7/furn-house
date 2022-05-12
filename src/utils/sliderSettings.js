export const productImagesSlider = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  arrows: true,
  responsive: [
    {
      breakpoint: 1055,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: false,
      },
    },
  ],
};

export const similarProductSlider = {
  dots: true,
  infinite: false,
  slidesToShow: 4,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
    {
      breakpoint: 748,
      settings: {
        slidesToShow: 2,
        infinite: true,
      },
    },
  ],
};
