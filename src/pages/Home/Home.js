import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import SearchResults from '../../components/Search/SearchResults';
import SearchContent from '../../components/SearchContent/SearchContent';
import useFetchSearch from '../../components/Search/useFetchSearch';
import Row from '../../components/Row/Row';
import {
   fetchAsyncTopAnime,
   fetchAsyncTopManga,
   fetchAsyncTopCharacter,
   fetchAsyncTopPeople,
   removeState,
} from '../../features/animes/animeSlice';
import { settings } from '../../helper';
import {
   getAllTopAnime,
   getAllTopManga,
   getAllTopCharacters,
   getSearchAnime,
   getAllTopPeople,
} from '../../features/animes/animeSlice';

const Home = () => {
   const { onHandleSubmit, setSearchTerm, searchTerm, isSearching, error } =
      useFetchSearch();
   const dispatch = useDispatch();

   const topAnime = useSelector(getAllTopAnime);
   const topManga = useSelector(getAllTopManga);
   const topPeople = useSelector(getAllTopPeople);
   const topCharacters = useSelector(getAllTopCharacters);
   const searchResultData = useSelector(getSearchAnime);

   console.log(topPeople);
   useEffect(() => {
      dispatch(fetchAsyncTopAnime(1));
      dispatch(fetchAsyncTopManga());

      const timerId = setTimeout(() => {
         dispatch(fetchAsyncTopPeople());
         dispatch(fetchAsyncTopCharacter());
      }, 2000);

      return () => {
         clearTimeout(timerId);
         dispatch(removeState());
      };
   }, [dispatch]);

   return (
      <>
         <Header />
         <div className="w-full h-full">
            <SearchContent>
               <Search
                  onHandleSubmit={onHandleSubmit}
                  setSearchTerm={setSearchTerm}
                  searchTerm={searchTerm}
               />
            </SearchContent>
            {error ? (
               <div>Error</div>
            ) : (
               <>
                  {isSearching ? (
                     <SearchResults data={searchResultData} type="anime" />
                  ) : (
                     <React.Fragment>
                        <Row
                           data={topAnime}
                           settings={settings}
                           type="anime"
                           title="Top Anime"
                        />
                        <Row
                           data={topManga}
                           settings={settings}
                           type="manga"
                           title="Top Manga"
                        />
                        <Row
                           data={topCharacters}
                           settings={settings}
                           type="manga"
                           title="Most Favorited Characters"
                        />
                        <Row
                           data={topPeople}
                           settings={settings}
                           type="manga"
                           title="Most Favorited People"
                        />
                     </React.Fragment>
                  )}
               </>
            )}
         </div>
      </>
   );
};

export default Home;
