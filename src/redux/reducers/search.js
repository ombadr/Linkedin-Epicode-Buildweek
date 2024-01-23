import { RECENT_SEARCHES } from "../actions";

const initialState = {
    recentSearches: []
}


const searchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECENT_SEARCHES:
            return {
                ...state,
                recentSearches: [...state.recentSearches, action.payload]
            }
        default:
            return state
    }
}

export default searchesReducer