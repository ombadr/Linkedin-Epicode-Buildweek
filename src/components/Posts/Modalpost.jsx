import { useState } from "react"
import { Modal,Button } from "react-bootstrap"

export const Modalpost = (props) => {

    const [postnuovo,setpostnuovo]=useState(null)

    async function handleSubmit(){
        console.log(postnuovo)
        try {
          const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE`,
            },
            body: JSON.stringify({text:postnuovo}),
          });
    
          if (!response.ok) {
            throw new Error(response.status);
          }
    
        } catch (error) {
          console.error(`Errore durante l'aggiunta del post: ${error.message}`);
        }
        props.cambiamodifica()
        props.handleClose()
    };
    const handleInputChange=(e)=>{
    setpostnuovo(e)
    
    }
    return (

        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Crea nuovo post</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <p>Post:</p>
                <input type="text" onChange={(e) => {
                handleInputChange(e.target.value);
              }} name="name" id=""  />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit} >
                    Pubblica
                </Button>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>

    )
}