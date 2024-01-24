
export const GET_JOBS_BY_CATEGORY = 'GET_JOBS_BY_CATEGORY';
export const RECENT_SEARCHES = 'RECENT_SEARCHES';
export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const RESET_SEARCH = 'RESET_SEARCH';
export const MAIN_PROFILE = "MAIN_PROFILE";
export const GET_JOBS_FROM_SEARCH = "GET_JOBS_FROM_SEARCH";

export const mainProfileAction = () => {
  return async dispatch => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": '*',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE"
      }
    })
      .then(res => {
        if (res.ok) {

          return res.json()
        } else {
          throw new Error("Errore fetch profilo personale")
        }
      })
      .then(profilo => {
        dispatch({
          type: MAIN_PROFILE,
          payload: profilo,
        })
      })
      .catch(err => {
        console.log("Errore" + err)
      })
  }
}





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

export const performSearchAction = () => {
  return {
    type: PERFORM_SEARCH
  }
}

export const resetSearchAction = () => {
  return {
    type: RESET_SEARCH
  }
}


export const getJobsFromSearchAction = (searchTerm) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${searchTerm}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE"
        }
      })
      if (!response.ok) {
        throw new Error('Cannot get jobs from search', response.status)
      }
      const data = await response.json()
      dispatch({ type: GET_JOBS_FROM_SEARCH, payload: data })
    } catch (err) {
      console.log('Error: ', err)
    }
  }
}
