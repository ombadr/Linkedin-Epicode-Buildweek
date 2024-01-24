import { configureStore, combineReducers } from '@reduxjs/toolkit';

import profiloReducer from '../reducers/profile/profilo';
import jobsReducer from '../reducers/jobs/jobs';
import searchesReducer from '../reducers/jobs/search';
import performSearchReducer from '../reducers/jobs/performSearch';
import fetchPostsReducers from '../reducers/posts/FetchPostsReducer';
import jobsFromSearchReducer from '../reducers/jobs/jobsFromSearch';


const rootReducer = combineReducers({
    profilo: profiloReducer,
    jobs: jobsReducer,
    search: searchesReducer,
    performSearch: performSearchReducer,
    FetchPosts: fetchPostsReducers,
    results: jobsFromSearchReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
