import { FETCH_PROFILES_FAILURE } from "../actions";
import { FETCH_PROFILES_REQUEST } from "../actions";
import { FETCH_PROFILES_SUCCESS } from "../actions";

const initialState = {
  profile: null,
  loading: false,
  error: null
};

const fetchProfilesReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PROFILES_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
        error: null
      };

    case FETCH_PROFILES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default fetchProfilesReducers;


