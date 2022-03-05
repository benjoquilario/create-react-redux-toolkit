import React from 'react';
import '../../styles/style.css';

const MobileInforCard = ({ data }) => {
   return (
      <div className="w-full relative z-1">
         {Object.keys(data).length === 0 ? (
            <div>Loading...</div>
         ) : (
            <div className="flex flex-wrap justify-center">
               <div className="w-full max-w-full">
                  <section className="block h-auto">
                     <div className="w-full min-h-0 min-w-full">
                        <div className="calc_height block bg-cover bg-no-repeat bg-[#0a1f49]">
                           <div
                              className="bg-cover bg-no-repeat w-full h-full min-w-full"
                              style={{
                                 backgroundImage: `url(${data.data.images.jpg.image_url})`,
                                 backgroundPosition: `calc((((100vw / 2.222222) - 20px) / 1.5) / 2) 0`,
                              }}
                           >
                              <div
                                 className="w-full h-full"
                                 style={{
                                    backgroundImage: `linear-gradient(to right, rgba(10, 31, 73, 0.8) 0%, rgba(10, 31, 73, 0.8) 100%)`,
                                 }}
                              >
                                 <img
                                    className="poster"
                                    src={data.data.images.jpg.image_url}
                                    alt={data.data.title}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="w-full max-w-full flex">
                        <section className="flex flex-wrap content-center w-full">
                           <div className="flex flex-wrap w-full bg-[#0a1f49]">
                              <div className="w-full flex justify-center content-center items-center py-[16px] px-[20px] ">
                                 <div className="w-full">
                                    <h2 className="text-[21px] text-white inline-flex justify-center w-full text-center">
                                       {data.data.title}
                                       <span className="opacity-80">
                                          ({data.data.year})
                                       </span>
                                    </h2>
                                 </div>
                              </div>

                              <div className="w-full flex items-center justify-between pb-[16px] px-[20px] text-white">
                                 <div className="flex items-center">
                                    <div className="w-[63px] h-[63px] inline-flex">
                                       <div className="w-[54px] h-[54px] rounded-[50%] p-2 bg-[#0000001a]">
                                          <div className="w-full h-full flex justify-center items-center text-[18px]">
                                             {data.data.score}
                                          </div>
                                       </div>
                                    </div>
                                    <div className="font-bold ml-[6px] whitespace-pre-line leading-[16px]">
                                       Anime Score
                                    </div>
                                 </div>
                                 <div className="w-[1px] h-[24px] inline-flex border-solid border-r border-slate-50"></div>
                                 <div className="inline-flex items-center overflow-hidden">
                                    <a
                                       href={data.data.trailer.embed_url}
                                       className="flex items-center gap-2"
                                    >
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          x="0px"
                                          y="0px"
                                          width="28"
                                          height="28"
                                          viewBox="0 0 30 30"
                                          style={{ fill: `#ffffff` }}
                                       >
                                          <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                                       </svg>
                                       Play Trailer
                                    </a>
                                 </div>
                              </div>

                              <div className="w-full flex justify-center content-center items-center bg-[#0000001a] p-[10px]">
                                 <div className="flex flex-wrap justify-center text-white">
                                    <span className="inline-flex whitespace-nowrap items-center content-center px-[3px] mr-[7px] text-white opacity-60 border-white border border-solid">
                                       {data.data.type}
                                    </span>
                                    <div className="text-white flex gap-1">
                                       {data.data.genres.map((genre, index) => (
                                          <span key={index}>{genre.name}</span>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full p-[20px]">
                                 <h3 className="text-xl my-2 font-bold text-white">
                                    Synopsis
                                 </h3>
                                 <div>
                                    <p className="text-sm text-white">
                                       {data.data.synopsis}
                                    </p>
                                 </div>
                                 <div className="mt-5">
                                    <p className="text-sm text-white">
                                       {data.data.background
                                          ? data.data.background
                                          : null}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </section>
                     </div>
                  </section>
               </div>
            </div>
         )}
      </div>
   );
};

export default MobileInforCard;
