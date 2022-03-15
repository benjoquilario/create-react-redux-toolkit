import React, { useEffect, useState } from 'react';
import DesktopInfoCard from './DesktopInfoCard';
import MobileInforCard from './MobileInforCard';

const Info = ({ data }) => {
   const [innerWidth, setInnerWidth] = useState(window.innerWidth);
   const breakpoints = 768;

   useEffect(() => {
      window.addEventListener('resize', () => setInnerWidth(window.innerWidth));

      return () =>
         window.removeEventListener('resize', () =>
            setInnerWidth(window.innerWidth)
         );
   });
   return (
      <section className="flex flex-wrap justify-center items-start content-start w-full">
         {innerWidth >= breakpoints ? (
            <DesktopInfoCard data={data} />
         ) : (
            <MobileInforCard data={data} />
         )}
      </section>
   );
};

export default Info;
