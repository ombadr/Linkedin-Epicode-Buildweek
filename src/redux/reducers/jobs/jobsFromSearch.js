import { GET_JOBS_FROM_SEARCH } from "../../actions";

const initialState = {
    results: []
}

const jobsFromSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS_FROM_SEARCH:
            return {
                ...state,
                results: [action.payload]
            }
        default:
            return state
    }
}

export default jobsFromSearchReducer