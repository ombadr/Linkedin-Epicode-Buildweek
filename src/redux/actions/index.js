


export const FETCH_PROFILES_REQUEST = 'FETCH_PROFILES_REQUEST';
export const FETCH_PROFILES_SUCCESS = 'FETCH_PROFILES_SUCCESS';
export const FETCH_PROFILES_FAILURE = 'FETCH_PROFILES_FAILURE';


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzY0MzYwMGJlMTAwMTgzYTg2OGUiLCJpYXQiOjE3MDU5MTU5NzEsImV4cCI6MTcwNzEyNTU3MX0.hsaxTJkzI1gAKxzonQ-Doyca1my7zV0bb32dLqzDSrQ"

export default fetchProfiles = (token) => {
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
                throw new Error(response.status)
            }
            const data = await response.json();
            dispatch({ type: FETCH_PROFILE_SUCCESS, payload: data });
          } catch (error) {
            dispatch({ type: FETCH_PROFILE_FAILURE, payload: error.message });
          }
        }
    }
