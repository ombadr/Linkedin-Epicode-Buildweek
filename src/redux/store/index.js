import { configureStore,combineReducers } from "@reduxjs/toolkit";
import profiloReducer from "../reducer/profilo";



const bigReducer=combineReducers({
    profilo:profiloReducer
})

const store=configureStore({
    reducer:bigReducer,
})

export default store