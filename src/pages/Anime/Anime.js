import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Info from '../../components/Info/Info';
import Search from '../../components/Search/Search';
import {
   fetchAsyncAnime,
   selectedAnime,
   getSearchAnime,
   season,
   fetchAsyncAnimeSeason,
   recommendedAnime,
   fetchAsyncRecommendedAnime,
   removeStateRecommendedAnime,
   removeStateSelectedAnime,
} from '../../features/animes/animeSlice';
import useFetchSearch from '../../components/Search/useFetchSearch';
import SearchResults from '../../components/Search/SearchResults';
import Header from '../../components/Header/Header';
import Row from '../../components/Row/Row';
import { settings } from '../../helper';
import EntryRow from '../../components/Row/EntryRow';

const Anime = () => {
   const { id } = useParams();
   const [openSearch, setOpenSearch] = useState(false);
   const { onHandleSubmit, setSearchTerm, searchTerm, isSearching, error } =
      useFetchSearch();
   const anime = useSelector(selectedAnime);
   const seasonAnime = useSelector(season);
   const recommended = useSelector(recommendedAnime);
   const searchResultData = useSelector(getSearchAnime);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!id) return;

      let isSubscribed = true;

      if (isSubscribed) {
         dispatch(fetchAsyncAnime(id));
         dispatch(fetchAsyncAnimeSeason());
         dispatch(fetchAsyncRecommendedAnime(id));

         return () => {
            dispatch(removeStateRecommendedAnime());
            dispatch(removeStateSelectedAnime());
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
               <div>Error</div>
            ) : (
               <>
                  {isSearching ? (
                     <SearchResults data={searchResultData} type="anime" />
                  ) : (
                     <>
                        <Info data={anime} />
                        <EntryRow
                           data={recommended}
                           settings={settings}
                           type="anime"
                           title="Recommended Anime"
                        />
                        <Row
                           data={seasonAnime}
                           settings={settings}
                           type="anime"
                           title="Season Now"
                        />
                     </>
                  )}
               </>
            )}
         </div>
      </>
   );
};

export default Anime;
