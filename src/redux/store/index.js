import { configureStore, combineReducers } from '@reduxjs/toolkit';

import profiloReducer from '../reducers/profile/profilo';
import jobsReducer from '../reducers/jobs/jobs';
import searchesReducer from '../reducers/jobs/search';
import performSearchReducer from '../reducers/jobs/performSearch';

import jobsFromSearchReducer from '../reducers/jobs/jobsFromSearch';


const rootReducer = combineReducers({
    profilo: profiloReducer,
    jobs: jobsReducer,
    search: searchesReducer,
    performSearch: performSearchReducer,
    results: jobsFromSearchReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
