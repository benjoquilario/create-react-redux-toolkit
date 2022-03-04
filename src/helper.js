import PrevArrow from './components/Arrow/PrevArrow';
import NextArrow from './components/Arrow/NextArrow';

const settings = {
   infinite: true,
   speed: 500,
   slidesToShow: 8,
   slidesToScroll: 8,
   nextArrow: <NextArrow />,
   prevArrow: <PrevArrow />,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
         },
      },

      {
         breakpoint: 819,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
         },
      },

      {
         breakpoint: 651,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
         },
      },
      {
         breakpoint: 483,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
         },
      },
   ],
};

export { settings };
