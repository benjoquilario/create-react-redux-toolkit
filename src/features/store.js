import { configureStore } from '@reduxjs/toolkit';
import animesReducers from './animes/animeSlice';

export const store = configureStore({
   reducer: {
      anime: animesReducers,
   },
});
