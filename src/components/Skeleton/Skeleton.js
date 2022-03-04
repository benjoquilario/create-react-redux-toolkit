import React from 'react';
import SkeletonElement from './SkeletonElement';

const Skeleton = () => {
   return (
      <div className="relative h-[269px] w-[150px] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] rounded overflow-hidden">
         <SkeletonElement type="bg-[#dae6ee] dark:bg-[#2b3945] h-[225px] w-[150px]" />
         <SkeletonElement type="h-[20px] w-[150px] bg-[#dae6ee] mt-2 dark:bg-[#2b3945] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)]" />
      </div>
   );
};

export default Skeleton;
