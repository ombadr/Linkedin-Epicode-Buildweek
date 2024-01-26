import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { idhomepage } from '../Homepage/Homepage';

const ExperienceFormModifica = (props) => {
  const [experience, setExperience] = useState({
    role: props.experience.role,
    company: props.experience.company,
    startDate: props.experience.startDate,
    endDate: props.experience.endDate,
    description: props.experience.description,
    area: props.experience.area,
  });

  const [disableSwitch,setDisableSwitch] = useState(false)


  const handleInputChange = (proprieta, valore) => {
    setExperience({
      ...experience,
      [proprieta]: valore,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.id}/experiences/${props.experience._id}`,
        {
          method: "PUT",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              `Bearer ${idhomepage}`,
          },
        }
      );
      if (res.ok) {
      } else {
        throw new Error("Error nel salvare Experiences");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }

    props.getExperiences();
  };



  
  const disableEndDate = () => {
    setDisableSwitch(!disableSwitch);
    setExperience({
      ...experience,
      endDate: "1970 01 01"
    });
  };



  return (
    <div>
      <Row>
        <Col>
          <h2>Modifica una esperienza</h2>
        </Col>
        <Form onSubmit={handleSubmit}>
           
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
      </Row>
    </div>
  );
};

export default ExperienceFormModifica;
