import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { fetchputProfilo } from "../Fetchprofilo";
import { Form } from "react-bootstrap";

export function Infoprofilo(props) {
  const [modifiedValues, setModifiedValues] = useState({
    name: props.profilo.name,
    surname: props.profilo.surname,
    email: props.profilo.email,
    username: props.profilo.username,
    bio: props.profilo.bio,
    title: props.profilo.title,
    area: props.profilo.area,
    image: props.profilo.image,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModifiedValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSaveChanges = async () => {
    console.log("Valori modificati:", modifiedValues);
    props.handleClose();
    fetchputProfilo(modifiedValues);
    props.handleRedo();
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Info Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.modifica === true ? (
            <>
              {/* <Form onSubmit={handleSubmit}>
           
           <Form.Group className="p-2">
           <Form.Label>Nome azienda</Form.Label>
           <Form.Control
             type="text"
             placeholder="Esempio: Microsoft"
             required
             value={experience.company}
             onChange={(e) => {
               handleInputChange("company", e.target.value);
             }}
           ></Form.Control>
         </Form.Group>
         <Form.Group className="p-2">
           <Form.Label>Qualifica</Form.Label>
           <Form.Control
             type="text"
             placeholder="Esempio: Retail Sales Manager"
             required
             value={experience.role}
             onChange={(e) => {
               handleInputChange("role", e.target.value);
             }}
           ></Form.Control>
         </Form.Group>
           
         <Form.Group className="p-2">
         <Form.Label>Data di inizio</Form.Label>
           <Form.Control
             type="text"
             placeholder="Da: YYYY-MM-DD"
             required
             value={experience.startDate.substring(0, 10)}
             onChange={(e) => {
               handleInputChange("startDate", e.target.value);
             }}
           ></Form.Control>
         </Form.Group>

         <Form.Group className="p-2">
         <Form.Label>Data di fine</Form.Label>
           <Form.Control
             type="text"
             placeholder="A: YYYY-MM-DD"
             disabled={disableSwitch}
             value={experience.endDate.substring(0, 10) === "1970-01-01" ? ("Ad oggi") : (experience.endDate.substring(0, 10))}
             onChange={(e) => {
               handleInputChange("endDate", e.target.value);
             }}
           ></Form.Control>
         </Form.Group>
         <Form.Check
              type="switch"
              id="custom-switch"
              label="Attualmente ricopro questo ruolo"
              onChange={disableEndDate}
            />
         <Form.Group className="p-2">
         <Form.Label>Descrizione</Form.Label>
           <Form.Control
             type="text"
             placeholder="Descrizione"
             required
             value={experience.description}
             onChange={(e) => {
               handleInputChange("description", e.target.value);
             }}
           ></Form.Control>
         </Form.Group>
         <Form.Group className="p-2">
         <Form.Label>Località</Form.Label>
           <Form.Control
             type="text"
             placeholder="Esempio: Milano, Italia"
             value={experience.area}
             required
             onChange={(e) => {
               handleInputChange("area", e.target.value);
             }}
           ></Form.Control>
         </Form.Group >
          <div className="text-center">
            <Button variant="primary" type="submit">
              Modifica
            </Button>
          </div>
        </Form>
      </Row> */}

              <Form>
                <Form.Group className="p-2">
                  <Form.Label>Nome: </Form.Label>
                  <Form.Control
                    type="text"
                    value={modifiedValues.name}
                  name="name"
                  id=""
                  onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="p-2">
                  <Form.Label>Cognome: </Form.Label>
                  <Form.Control
                     type="text"
                     value={modifiedValues.surname}
                     name="surname"
                     id=""
                     onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="p-2">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control
                     type="text"
                     value={modifiedValues.email}
                     name="email"
                     id=""
                     onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="p-2">
                  <Form.Label>Username: </Form.Label>
                  <Form.Control
                      type="text"
                      value={modifiedValues.username}
                      name="username"
                      id=""
                      onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="p-2">
                  <Form.Label>Bio: </Form.Label>
                  <Form.Control
                       type="text"
                       value={modifiedValues.bio}
                       name="bio"
                       id=""
                       onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="p-2">
                  <Form.Label>Titolo: </Form.Label>
                  <Form.Control
                       type="text"
                       value={modifiedValues.title}
                       name="title"
                       id=""
                       onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="p-2">
                  <Form.Label>Area: </Form.Label>
                  <Form.Control
                        type="text"
                        value={modifiedValues.area}
                        name="area"
                        id=""
                        onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="p-2">
                  <Form.Label>Immagine di Profilo: </Form.Label>
                  <Form.Control
                         type="text"
                         value={modifiedValues.image}
                         name="image"
                         id=""
                         onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
              </Form>
            </>
          ) : (
            <>
              <Form>
              <Form.Group className="p-2">
                  <Form.Label>Name: </Form.Label>
                  <Form.Control disabled placeholder={`${props.profilo.name}`} />
                </Form.Group>
              <Form.Group className="p-2">
                  <Form.Label>Cognome: </Form.Label>
                  <Form.Control disabled placeholder={`${props.profilo.surname}`} />
                </Form.Group>
              <Form.Group className="p-2">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control disabled placeholder={`${props.profilo.email}`} />
                </Form.Group>
              <Form.Group className="p-2">
                  <Form.Label>Username: </Form.Label>
                  <Form.Control disabled placeholder={`${props.profilo.username}`} />
                </Form.Group>
              <Form.Group className="p-2">
                  <Form.Label>Bio: </Form.Label>
                  <Form.Control disabled placeholder={`${props.profilo.bio}`} />
                </Form.Group>
              <Form.Group className="p-2">
                  <Form.Label>Titolo: </Form.Label>
                  <Form.Control disabled placeholder={`${props.profilo.title}`} />
                </Form.Group>
              <Form.Group className="p-2">
                  <Form.Label>Area: </Form.Label>
                  <Form.Control disabled placeholder={`${props.profilo.area}`} />
                </Form.Group>
              <Form.Group className="p-2">
                  <Form.Label>Immagine di profilo: </Form.Label>
                  <Form.Control disabled placeholder={`${props.profilo.image}`} />
                </Form.Group>

              </Form>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {props.modifica === true && (
            <Button variant="primary" onClick={handleSaveChanges}>
              Salva Modifiche
            </Button>
          )}
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
