import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useFetchSearch from '../../components/Search/useFetchSearch';
import {
   fetchAsyncManga,
   fetchAsyncRecommendedManga,
   getSearchManga,
   recommendedManga,
   removeStateRecommendedManga,
   removeStateSearchManga,
   selectedManga,
} from '../../features/animes/animeSlice';
import Search from '../../components/Search/Search';
import SearchResults from '../../components/Search/SearchResults';
import Info from '../../components/Info/Info';
import EntryRow from '../../components/Row/EntryRow';
import { settings } from '../../helper';

const Manga = () => {
   const { id } = useParams();
   const [openSearch, setOpenSearch] = useState();
   const { onHandleSubmit, setSearchTerm, searchTerm, isSearching, error } =
      useFetchSearch();
   const manga = useSelector(selectedManga);
   const recommended = useSelector(recommendedManga);
   const searchResultData = useSelector(getSearchManga);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!id) return;
      let isSubscribed = true;

      if (isSubscribed) {
         dispatch(fetchAsyncManga(id));
         dispatch(fetchAsyncRecommendedManga(id));

         return () => {
            dispatch(removeStateSearchManga());
            dispatch(removeStateRecommendedManga());
         };
      }

      return () => (isSubscribed = false);
   }, [id, dispatch]);

   return (
      <>
         <Header openSearch={openSearch} setOpenSearch={setOpenSearch} />
         {openSearch ? (
            <Search
               onHandleSubmit={onHandleSubmit}
               setSearchTerm={setSearchTerm}
               searchTerm={searchTerm}
            />
         ) : null}
         <div className="h-full w-full">
            {error ? (
               <div>Error..</div>
            ) : (
               <>
                  {isSearching ? (
                     <SearchResults data={searchResultData} type="anime" />
                  ) : (
                     <>
                        <Info data={manga} />
                        <EntryRow
                           data={recommended}
                           settings={settings}
                           type="manga"
                           title="Recommended Manga"
                        />
                     </>
                  )}
               </>
            )}
         </div>
      </>
   );
};

export default Manga;
