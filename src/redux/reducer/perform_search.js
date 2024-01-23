import { PERFORM_SEARCH, RESET_SEARCH } from "../actions";

const initialState = {
    searchPerformed: false
}

const performSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERFORM_SEARCH:
            return {
                ...state,
                searchPerformed: true
            }
        case RESET_SEARCH:
            return {
                ...state,
                searchPerformed: false
            }
        default:
            return state
    }
}

export default performSearchReducer;