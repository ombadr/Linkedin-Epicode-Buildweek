import { PERFORM_SEARCH } from "../actions";

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
        default:
            return state
    }
}

export default performSearchReducer;