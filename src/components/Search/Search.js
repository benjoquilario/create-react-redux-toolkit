import React from 'react';

const Search = ({ onHandleSubmit, setSearchTerm, searchTerm }) => {
   return (
      <form className="relative shadow-2xl" onSubmit={onHandleSubmit}>
         <div className="visually-hidden" aria-live="polite"></div>
         <div className="form__container">
            <input
               type="text"
               placeholder="search"
               className="w-full h-[46px] text-lg px-[23px] leading-[46px] rounded-[30px]"
               value={searchTerm}
               onChange={e => setSearchTerm(e.target.value)}
            />
            <button
               className="bg-[#0a1f49] absolute top-0 right-[-1px] inline-flex justify-center items-center content-center h-[46px] rounded-[30px] px-[26px] py-[10px]"
               aria-label="submit form"
            >
               <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="fa-search"
                  height="1em"
                  width="1em"
               >
                  <path
                     fill="#f5f5f5"
                     d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
               </svg>
            </button>
         </div>
      </form>
   );
};

export default Search;
