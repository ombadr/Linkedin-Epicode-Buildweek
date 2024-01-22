// actions.js

export const FETCH_PROFILES_REQUEST = 'FETCH_PROFILES_REQUEST';
export const FETCH_PROFILES_SUCCESS = 'FETCH_PROFILES_SUCCESS';
export const FETCH_PROFILES_FAILURE = 'FETCH_PROFILES_FAILURE';

// Corrected syntax for named export
export const fetchProfiles = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      dispatch({ type: FETCH_PROFILES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_PROFILES_FAILURE, payload: error.message });
    }
  };
};