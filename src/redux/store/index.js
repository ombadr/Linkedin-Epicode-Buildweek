import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fetchProfilesReducers from '../reducers/FetchProfilesReducer';
import profiloReducer from "../reducer/profilo";
import jobsReducer from '../reducer/jobs';
import searchesReducer from '../reducer/search';
import performSearchReducer from '../reducer/perform_search';

const rootReducer = combineReducers({
    FetchProfiles: fetchProfilesReducers,
    profilo: profiloReducer,
    jobs: jobsReducer,
    search: searchesReducer,
    performSearch: performSearchReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;