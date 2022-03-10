import React from 'react';

const SearchContent = ({ children }) => {
   return (
      <section
         style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 31, 73, 0.8) 0%, rgba(10, 31, 73, 0.8) 100%), url('/images/bg.webp')`,
         }}
         className=" h-auto max-h-[360px] min-h-[300px] w-full items-center flex flex-wrap justify-center bg-no-repeat bg-[center_center] bg-cover"
      >
         <div className="w-full max-w-6xl mx-auto flex h-full">
            <div className="w-full flex justify-center items-start content-start">
               <div className="px-[20px] w-full flex flex-wrap max-w-[100vw]">
                  <div className="mb-[20px] w-full text-white ">
                     <h2 className="text-4xl md:text-5xl font-bold">
                        Welcome.
                     </h2>
                     <h3 className="text-2xl md:text-[2em] leading-9 font-semibold">
                        Millions of anime, manga and characters to discover.
                        Explore now.
                     </h3>
                  </div>
                  <div className="w-full mb-3">{children}</div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SearchContent;
