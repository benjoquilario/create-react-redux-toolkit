import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/style.css';

const Card = ({ data, type }) => {
   const { images, title, rank, mal_id, name } = data;

   return (
      <div className="relative w-[150px] min-w-[150px] overflow-visible flex flex-wrap rounded-[6px] content-start margin-left">
         <div className="overflow-hidden w-full rounded-[6px] h-[225px] ">
            <div className="relative w-full h-full hover:opacity-80 transition-opacity">
               <Link
                  to={`/${type}/${mal_id ? mal_id : data.entry.mal_id}`}
                  className="inline-block w-full h-full"
               >
                  <img
                     src={
                        images.jpg.image_url
                           ? images.jpg.image_url
                           : data.entry.images.jpg.image_url
                     }
                     className="inline-block w-full h-full"
                     alt={title}
                  />
               </Link>
            </div>
         </div>
         <div className="relative w-full flex items-start whitespace-normal flex-wrap">
            <div className="absolute top-[-33px] right-[14px] w-[38px] h-[38px] inline-block">
               <div className="inline-block w-[38px] h-[38px]">
                  <div className="relative flex items-center w-full h-full text-center">
                     {rank ? (
                        <div className="bg-[#032541] text-white font-bold flex items-center w-full h-full justify-center z-2 rounded-full">
                           {rank}
                        </div>
                     ) : null}
                  </div>
               </div>
            </div>
            <h2 className="text-[#032541]">
               <Link to={`/${type}/${mal_id}`} className="webkit-box">
                  {title ? title : name}
               </Link>
            </h2>
         </div>
      </div>
   );
};

export default Card;
