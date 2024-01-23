import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fetchProfilesReducers from '../reducers/FetchProfilesReducer';
import profiloReducer from "../reducer/profilo";
import fetchPostsReducers from '../reducers/FetchPostsReducer';
import jobsReducer from '../reducer/jobs';

const rootReducer = combineReducers({
    FetchProfiles: fetchProfilesReducers,
    profilo: profiloReducer,
    FetchPosts: fetchPostsReducers
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;