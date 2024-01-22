import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fetchProfilesReducers from '../reducers/FetchProfilesReducer';
import profiloReducer from "../reducer/profilo";

const rootReducer = combineReducers({
    FetchProfiles: fetchProfilesReducers,
    profilo: profiloReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;