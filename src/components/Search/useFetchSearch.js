import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsycnSearchAnime } from '../../features/animes/animeSlice';

const useFetchSearch = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
   const [isSearching, setIsSearching] = useState(false);
   const [error, setError] = useState(false);

   const dispatch = useDispatch();

   useEffect(() => {
      const timerId = setTimeout(() => {
         setDebouncedTerm(searchTerm);
      }, 1000);

      return () => {
         clearTimeout(timerId);
      };
   }, [searchTerm]);

   useEffect(() => {
      const fetchData = () => {
         try {
            setError(false);
            setIsSearching(true);

            dispatch(fetchAsycnSearchAnime(debouncedTerm));
         } catch (err) {
            setError(true);
            console.error(err);
         }
      };

      if (!debouncedTerm) return;
      setIsSearching(false);
      fetchData();
   }, [debouncedTerm, dispatch]);

   const onHandleSubmit = event => {
      event.preventDefault();
   };

   return { onHandleSubmit, setSearchTerm, searchTerm, isSearching, error };
};

export default useFetchSearch;
