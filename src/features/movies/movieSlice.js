import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import MovieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async ()=>{

        const movieText = "Harry";
        const response = await MovieApi
                                .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                                .catch((err)=>console.log("Err:",err));
        return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async ()=>{

    const seriesText = "Friends";
    const response = await MovieApi
                            .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
                            .catch((err)=>console.log("Err:",err));
    return response.data;
});

export const fetchAsyncMoviesorShowDetail = createAsyncThunk('movies/fetchAsyncMoviesorShowDetail', async (id)=>{

    const seriesText = "Friends";
    const response = await MovieApi
                            .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
                            .catch((err)=>console.log("Err:",err));
    return response.data;
});

const initialState = {
    movies:{}
};

const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
          },
      },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fetched successfully");
            return {...state,movies:payload};
        },
        [fetchAsyncMovies.rejected]:(state,{payload})=>{
            console.log("fetched successfully");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
          },
        [fetchAsyncMoviesorShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectMovieOrShow: payload };
        },
    }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllshows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;