import { configureStore, combineReducers } from '@reduxjs/toolkit';

import profiloReducer from "../reducers/profilo";

const rootReducer = combineReducers({
    profilo: profiloReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;