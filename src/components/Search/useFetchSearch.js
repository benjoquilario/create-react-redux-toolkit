import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
   fetchAsycnSearchAnime,
   removeStateSearchAnime,
} from '../../features/animes/animeSlice';

const useFetchSearch = () => {
   const [searchTerm, setSearchTerm] = useState('');

   const [isSearching, setIsSearching] = useState(false);
   const [error, setError] = useState(false);

   const dispatch = useDispatch();

   const onHandleSubmit = event => {
      event.preventDefault();

      const fetchData = () => {
         try {
            setError(false);
            setIsSearching(true);

            dispatch(fetchAsycnSearchAnime(searchTerm));
         } catch (err) {
            setError(true);
            console.error(err);
         }
      };

      if (!searchTerm) return;
      setIsSearching(false);
      fetchData();

      return () => dispatch(removeStateSearchAnime());
   };

   return { onHandleSubmit, setSearchTerm, searchTerm, isSearching, error };
};

export default useFetchSearch;
