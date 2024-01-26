
import { idhomepage } from '../Homepage/Homepage';
    
    
    export async function fetchImg(endPoint, elemento) {
        try {
            const response = await fetch(
                'https://striveschool-api.herokuapp.com/api/' + endPoint ,
              {
                method: "POST",
                headers: {
                  
                  Authorization:
                    `Bearer ${idhomepage}`,
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

