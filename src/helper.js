import PrevArrow from './components/Arrow/PrevArrow';
import NextArrow from './components/Arrow/NextArrow';

const settings = {
   infinite: true,
   speed: 500,
   slidesToShow: 7,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '60px',
   nextArrow: <NextArrow />,
   prevArrow: <PrevArrow />,
   responsive: [
      {
         breakpoint: 1200,

         settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            centerPadding: '50px',
         },
      },

      {
         breakpoint: 819,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding: '30px',
         },
      },

      {
         breakpoint: 651,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding: '20px',
         },
      },
      {
         breakpoint: 483,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '10px',
         },
      },
   ],
};

export { settings };
