export const MAIN_PROFILE = "MAIN_PROFILE"


export const mainProfileAction = (id) => {
    return async dispatch => {
        fetch("https://striveschool-api.herokuapp.com/api/profile/" + id, {
            method: "GET",
            headers: {
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