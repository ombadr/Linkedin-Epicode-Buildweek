import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profiloReducer from '../reducers/profilo';
import jobsReducer from '../reducers/jobs';
import searchesReducer from '../reducers/search';
import performSearchReducer from '../reducers/perform_search';
import fetchPostsReducers from '../reducers/FetchPostsReducer';

import jobsFromSearchReducer from '../reducers/jobsFromSearch';



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