// actions.js

export const FETCH_PROFILES_REQUEST = 'FETCH_PROFILES_REQUEST';
export const FETCH_PROFILES_SUCCESS = 'FETCH_PROFILES_SUCCESS';
export const FETCH_PROFILES_FAILURE = 'FETCH_PROFILES_FAILURE';
export const GET_JOBS_BY_CATEGORY = 'GET_JOBS_BY_CATEGORY';
export const RECENT_SEARCHES = 'RECENT_SEARCHES';
export const PERFORM_SEARCH = 'PERFORM_SEARCH';

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

export const getJobsByCategoryAction = (category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=3`, {
        method: "GET",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE"
        }
      })
      if (!response.ok) {
        throw new Error('Cannot fetch jobs', response.status)
      }

      const data = await response.json()
      dispatch({ type: GET_JOBS_BY_CATEGORY, payload: data, category: category })

    } catch (err) {
      console.log('Error: ', err)
    }
  }
}

export const recentSearchesAction = (search) => {
  const randomJobsNumber = Math.floor(Math.random() * (5000 - 50 + 1)) + 50;

  return {
    type: RECENT_SEARCHES,
    payload: {
      search: search,
      jobs: randomJobsNumber
    }
  }
}

export const performSearchAction = (search) => {
  return {
    type: PERFORM_SEARCH,
    payload: search
  }
}

