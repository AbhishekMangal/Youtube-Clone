import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../Types";
const initialState: InitialState = {
    videos: [],
    currentPlaying:null,
    SearchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: []
}

const YoutubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers:{},
    extraReducers:(builder=>{
    }),
})

export const store = configureStore({
    reducer: {
        YoutubeSlice: YoutubeSlice.reducer,

    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
