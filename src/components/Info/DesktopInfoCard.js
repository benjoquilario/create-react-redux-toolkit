import React from 'react';
import Search from '../Search/Search';
import bg from '../../assets/images/bg.webp';

const DesktopInfoCard = ({ data }) => {
   return (
      <div className="w-full flex flex-wrap justify-center">
         {Object.keys(data).length === 0 ? (
            <div>loading...</div>
         ) : (
            <div
               className="py-[40px] md:py-[30px] px-[20px] md:px-[40px]"
               style={{
                  backgroundImage: `linear-gradient(to right, rgba(10, 31, 73, 0.8) 0%, rgba(10, 31, 73, 0.8) 100%), url(${bg})`,
               }}
            >
               <section className="flex-nowrap flex flex-col md:flex-row items-center">
                  <div className="md:h-auto h-full w-full min-w-full md:min-w-[300px] md:w-[300px] overflow-hidden">
                     <div className="block h-full w-full min-w-full md:min-w-[300px] md:w-[300px] md:h-[450px] relative">
                        <div className="w-full h-full min-w-full">
                           <img
                              className="object-cover block w-full min-w-full h-full min-h-full"
                              src={data.data.images.jpg.image_url}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="flex">
                     <section className="flex flex-wrap items-start content-center md:pl-[40px]">
                        <div className="w-full mb-[18px] flex flex-wrap">
                           <h2 className="w-full text-xl md:text-3xl text-white mb-4">
                              {data.data.title}
                           </h2>
                           <div className="flex">
                              <span className="inline-flex whitespace-nowrap items-center content-center px-[3px] mr-[7px] text-white opacity-60 border-white border border-solid">
                                 {data.data.type}
                              </span>
                              <div className="text-white flex gap-1">
                                 {data.data.genres.map(genre => (
                                    <span>{genre.name}</span>
                                 ))}
                              </div>
                              <span className='relative pl-[20px] before:content-["\2022"] before:w-full before:h-full before:absolute before:top-0 before:left-[7px] before:inline-flex before:content-center before:items-center text-white'>
                                 {data.data.episodes}EP
                              </span>
                           </div>
                        </div>
                        <ul className="relative flex flex-col md:flex-row md:items-center justify-start mb-[18px] md:h-[62px] w-full text-white md:before:absolute md:before:block md:before:h-[60px] md:before:w-[1px] md:before:left-[130px] md:before:top-0 md:before:bg-white">
                           <li className="flex items-center mr-[20px]">
                              <div className="w-[63px] h-[63px] inline-flex">
                                 <div className="w-[63px] h-[63px] rounded-[50%] p-2 bg-[#081c22]">
                                    <div className="w-full h-full flex justify-center items-center text-[22px]">
                                       {data.data.score}
                                    </div>
                                 </div>
                              </div>
                              <div className="font-bold ml-[6px] whitespace-pre-line leading-[16px]">
                                 Anime <br />
                                 Score
                              </div>
                           </li>
                           <li className="text-lg md:text-[22px] flex items-center ml-1 mr-[20px]">
                              <span className="text-white font-bold">
                                 Ranked
                              </span>
                              <span className="text-[26px] ml-[6px]">
                                 #{data.data.rank}
                              </span>
                           </li>
                           <li className="text-lg md:text-[22px] flex items-center ml-1 mr-[20px]">
                              <span className="text-white font-bold">
                                 Popularity
                              </span>
                              <span className="text-[26px] ml-[6px]">
                                 #{data.data.popularity}
                              </span>
                           </li>
                           <li className="text-lg md:text-[22px] flex items-center ml-1 mr-[20px]">
                              <span className="text-white font-bold">
                                 Members
                              </span>
                              <span className="ml-[6px]">
                                 {data.data.members}
                              </span>
                           </li>
                        </ul>
                        <div className="w-full">
                           <h3 className="text-lg italic opacity-80 text-white">
                              {data.data.rating}
                           </h3>
                           <h3 className="text-xl my-2 font-bold text-white">
                              Synopsis
                           </h3>
                           <div>
                              <p className="text-sm text-white">
                                 {data.data.synopsis}
                              </p>
                           </div>
                        </div>
                     </section>
                  </div>
               </section>
            </div>
         )}
      </div>
   );
};

export default DesktopInfoCard;
