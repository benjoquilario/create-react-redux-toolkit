import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../apis/axios';

const initialState = {
   topAnime: {},
   selectedAnime: {},
   topManga: {},
   topCharacters: {},
   topPeople: {},
   searchAnime: {},
   season: {},
   recommendedAnime: {},
};

export const fetchAsyncTopAnime = createAsyncThunk(
   'anime/fetchAsyncTopAnime',
   async num => {
      const response = await axios.get('/top/anime', {
         params: {
            page: num,
         },
      });

      return response.data;
   }
);

export const fetchAsyncAnime = createAsyncThunk(
   '/anime/fetchAsycnAnime',
   async id => {
      const response = await axios.get(`/anime/${id}`);

      return response.data;
   }
);

export const fetchAsycnSearchAnime = createAsyncThunk(
   'anime/fetchAsyncSearchAnime',
   async name => {
      const response = await axios.get('/anime', {
         params: {
            q: name,
         },
      });
      return response.data;
   }
);

export const fetchAsyncTopManga = createAsyncThunk(
   'manga/fetchAsyncTopManga',
   async () => {
      const response = await axios.get('/top/manga');

      return response.data;
   }
);

export const fetchAsyncTopCharacter = createAsyncThunk(
   '/character/fetchAsyncTopCharacter',
   async () => {
      const response = await axios.get('/top/characters');

      return response.data;
   }
);

export const fetchAsyncTopPeople = createAsyncThunk(
   '/people/fetchAsyncTopPeople',
   async () => {
      const response = await axios.get('/top/people');

      return response.data;
   }
);

export const fetchAsyncAnimeSeason = createAsyncThunk(
   '/season/fetchAsyncAnimeSeason',
   async () => {
      const response = await axios.get('/seasons/now');

      return response.data;
   }
);

export const fetchAsyncRecommendedAnime = createAsyncThunk(
   '/season/fetchAsyncRecommendedAnime',
   async id => {
      const response = await axios.get(`anime/${id}/recommendations`);

      return response.data;
   }
);

const animeSlice = createSlice({
   name: 'animes',
   initialState,
   reducers: {
      removeSelectedAnime: state => {
         state.selectedAnime = {};
      },

      removeState: state => {
         state.topAnime = {};
         state.selectedAnime = {};
         state.topManga = {};
         state.topCharacters = {};
         state.topPeople = {};
         state.searchAnime = {};
      },
   },
   extraReducers(builder) {
      builder.addCase(fetchAsyncTopAnime.fulfilled, (state, { payload }) => {
         return { ...state, topAnime: payload };
      });

      builder.addCase(fetchAsyncAnime.fulfilled, (state, { payload }) => {
         return { ...state, selectedAnime: payload };
      });

      builder.addCase(fetchAsyncTopManga.fulfilled, (state, { payload }) => {
         return { ...state, topManga: payload };
      });

      builder.addCase(
         fetchAsyncTopCharacter.fulfilled,
         (state, { payload }) => {
            return { ...state, topCharacters: payload };
         }
      );

      builder.addCase(fetchAsyncAnimeSeason.fulfilled, (state, { payload }) => {
         return { ...state, season: payload };
      });

      builder.addCase(
         fetchAsyncRecommendedAnime.fulfilled,
         (state, { payload }) => {
            return { ...state, recommendedAnime: payload };
         }
      );

      builder.addCase(fetchAsyncTopPeople.fulfilled, (state, { payload }) => {
         return { ...state, topPeople: payload };
      });

      builder.addCase(fetchAsycnSearchAnime.fulfilled, (state, { payload }) => {
         return { ...state, searchAnime: payload };
      });
   },
});

export const { removeSelectedAnime, removeState } = animeSlice.actions;
export const getAllTopAnime = state => state.anime.topAnime;
export const getAllTopManga = state => state.anime.topManga;
export const getAllTopCharacters = state => state.anime.topCharacters;
export const getAllTopPeople = state => state.anime.topPeople;
export const getSearchAnime = state => state.anime.searchAnime;
export const selectedAnime = state => state.anime.selectedAnime;
export const season = state => state.anime.season;
export const recommendedAnime = state => state.anime.recommendedAnime;
export default animeSlice.reducer;
