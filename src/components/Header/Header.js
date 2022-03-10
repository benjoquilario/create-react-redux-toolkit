import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { listItem } from '../../assets';

const Header = ({ openSearch, setOpenSearch }) => {
   const [openMenu, setOpenMenu] = useState(false);

   const onClickOpen = () => setOpenMenu(!openMenu);

   return (
      <header className="bg-[#0a1f49] absolute top-0 left-0 w-full p-3 md:p-5 z-10">
         <div className="w-full max-w-6xl mx-auto flex justify-between items-center md:justify-start">
            <Link to="/" className="text-lg text-white md:text-2xl">
               D-ANIME
            </Link>
            <nav className="md:ml-8 md:flex-1 order-[-1] md:order-none">
               <button
                  onClick={onClickOpen}
                  className="flex items-center bg-transparent md:hidden"
               >
                  <img src="/images/icon-hamburger.svg" alt="D-ANIME - Home" />
               </button>
               <div
                  className={`${
                     openMenu ? 'h-[200px]' : 'h-0'
                  } bg-[#0a1f49] absolute top-[64px] left-0 px-5 flex items-center justify-start w-full z-9999 overflow-hidden transition-all md:relative md:top-[unset] md:overflow-visible`}
               >
                  <ul className="grid grid-cols-1 items-center gap-y-3 md:grid-cols-4">
                     {listItem.map((list, index) => (
                        <li
                           key={index}
                           className="text-white text-base uppercase tracking-wider font-normal md:text-sm"
                        >
                           <Link to={`/${list.link}`}>{list.title}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </nav>
            <div className="">
               <ul>
                  <li>
                     <button
                        className="h-[18px] w-[18px] md:h-[24px] md:w-[25px]"
                        onClick={() => setOpenSearch(!openSearch)}
                     >
                        <svg
                           aria-hidden="true"
                           focusable="false"
                           role="img"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512"
                           className="text-white"
                           fill="currentColor"
                           stroke="currentColor"
                        >
                           <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
};

export default Header;
