import {
    FETCH_PROFILES_REQUEST,
    FETCH_PROFILES_SUCCESS,
    FETCH_PROFILES_FAILURE
} from "./actions"

const initialState = {
    profile = null,
    loading = false,
    error = null
};

const fetchProfilesReducers = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PROFILE_REQUEST:
            return {
              ...state,
              loading: true,
              error: null
            };
      
          case FETCH_PROFILE_SUCCESS:
            return {
              ...state,
              loading: false,
              profile: action.payload,
              error: null
            };
      
          case FETCH_PROFILE_FAILURE:
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
    

