
    export async function fetchImg(endPoint, elemento) {
        try {
            const response = await fetch(
                'https://striveschool-api.herokuapp.com/api/' + endPoint ,
              {
                method: "POST",
                headers: {
                  
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE",
                },
                body: elemento,
              }
            );
            if (response.ok) {
              console.log("POST Img successfully");
            } else {
              console.error("Error POST Img experience");
            }
          } catch (error) {
            console.error("Error in POST Img:", error.message);
          }
    }

