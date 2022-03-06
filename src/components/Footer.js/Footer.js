import React from 'react';

const Footer = () => {
   return (
      <footer className="mt-[20px] bg-[#edf1f5]">
         <div className="grid items-center gap-2 py-[70px] px-[62px] md:block">
            <a href="/" className="text-4xl text-[#0a1f49]">
               D-Anime
            </a>
            <nav className="flex md:flex-row justify-between text-left items-start flex-col md:w-[70%]">
               <ul>
                  <li className="text-[#0a1f49] my-[8px] text-lg">
                     <a href="/">Home</a>
                  </li>
                  <li className="text-[#0a1f49] my-[8px] text-lg">
                     <a href="/">Contact Us</a>
                  </li>
                  <li className="text-[#0a1f49] my-[8px] text-lg">
                     <a href="/">Terms of Services</a>
                  </li>
                  <li className="text-[#0a1f49] my-[8px] text-lg">
                     <a href="/">About Us</a>
                  </li>
               </ul>
               <ul>
                  <li className="text-[#0a1f49] my-[8px] text-lg">
                     <a href="/">Live</a>
                  </li>
                  <li className="text-[#0a1f49] my-[8px] text-lg">
                     <a href="/">FAQ</a>
                  </li>
                  <li className="text-[#0a1f49] my-[8px] text-lg">
                     <a href="/">Premium</a>
                  </li>
                  <li className="text-[#0a1f49] my-[8px] text-lg">
                     <a href="/">Privacy</a>
                  </li>
               </ul>
               <ul>
                  <li className="text-[#0a1f49] my-[8px] text-lg">
                     <a href="/">You must watch</a>
                  </li>
                  <li className="text-[#0a1f49] my-[8px] text-lg">
                     <a href="/">Recent Release</a>
                  </li>
               </ul>
            </nav>
         </div>
      </footer>
   );
};

export default Footer;
