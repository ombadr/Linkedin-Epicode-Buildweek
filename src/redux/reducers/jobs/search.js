import { RECENT_SEARCHES, RESET_RECENT_SEARCHES } from "../../actions";

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
        case RESET_RECENT_SEARCHES:
            return {
                ...state,
                recentSearches: []
            }
        default:
            return state
    }
}

export default searchesReducer