import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '../Card/Card';
import Skeleton from '../Skeleton/Skeleton';

const Row = ({ data, settings, title, type }) => {
   return (
      <section className="mt-8 px-5">
         <h2 className="text-lg md:text-2xl font-semibold mb-[20px] whitespace-nowrap">
            {title}
         </h2>

         <div className="relative">
            <Slider {...settings}>
               {Object.keys(data).length === 0
                  ? Array.from(Array(25), (_, i) => <Skeleton key={i} />)
                  : data.data.map((anime, index) => {
                       return <Card key={index} data={anime} type={type} />;
                    })}
            </Slider>
         </div>
      </section>
   );
};

export default Row;
