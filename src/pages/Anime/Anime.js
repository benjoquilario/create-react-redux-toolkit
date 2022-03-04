import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Info from '../../components/Info/Info';
import Search from '../../components/Search/Search';
import {
   fetchAsyncAnime,
   selectedAnime,
   getAllTopAnime,
   getAllTopManga,
   getAllTopCharacters,
   getSearchAnime,
   getAllTopPeople,
} from '../../features/animes/animeSlice';
import useFetchSearch from '../../components/Search/useFetchSearch';
import SearchResults from '../../components/Search/SearchResults';
import Header from '../../components/Header/Header';
import Row from '../../components/Row/Row';
import { settings } from '../../helper';

const Anime = () => {
   const { id } = useParams();
   const [openSearch, setOpenSearch] = useState(false);
   const { onHandleSubmit, setSearchTerm, searchTerm, isSearching, error } =
      useFetchSearch();
   const anime = useSelector(selectedAnime);
   const topAnime = useSelector(getAllTopAnime);
   const topManga = useSelector(getAllTopManga);
   const topPeople = useSelector(getAllTopPeople);
   const topCharacters = useSelector(getAllTopCharacters);
   const searchResultData = useSelector(getSearchAnime);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!id || !anime) return;

      dispatch(fetchAsyncAnime(id));
   }, [id, dispatch, anime]);

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
                     </>
                  )}
               </>
            )}
         </div>
      </>
   );
};

export default Anime;
