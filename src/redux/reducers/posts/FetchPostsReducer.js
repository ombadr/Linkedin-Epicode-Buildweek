import { FETCH_POSTS_FAILURE } from "../../actions";
import { FETCH_POSTS_REQUEST } from "../../actions";
import { FETCH_POSTS_SUCCESS } from "../../actions";

const initialState = {
  posts: null,
  loading: false,
  error: null
};

const fetchPostsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default fetchPostsReducers;


