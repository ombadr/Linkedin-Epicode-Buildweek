import { GET_JOBS_BY_CATEGORY } from "../actions";

const initialState = {
    jobsByCategory: {}
}

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS_BY_CATEGORY:
            return {
                ...state,
                jobsByCategory: {
                    ...state.jobsByCategory,
                    [action.category]: action.payload
                }
            }
        default:
            return state
    }
}

export default jobsReducer
