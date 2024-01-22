import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fetchProfilesReducers from '../reducers/FetchProfilesReducer';

const rootReducer = combineReducers({
    FetchProfiles: fetchProfilesReducers
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;