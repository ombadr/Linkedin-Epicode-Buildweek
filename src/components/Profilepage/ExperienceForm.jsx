import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

const ExperienceForm = (props) => {
  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });


  const handleInputChange = (proprieta, valore) => {
    setExperience({
      ...experience,
      [proprieta]: valore,
    });

    {console.log(experience)}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.id}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE",
          },
        }
      );
      if (res.ok) {
        setExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
      } else {
        throw new Error("Error nel salvare Experiences");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
     
    }
    {console.log(experience)}

    props.getExperiences()
  };

  


    return (
        
      <div>
        
        <Row>
          <Col>
            <h2>Aggiungi una esperienza</h2>
          </Col>
          <Form onSubmit={handleSubmit}>
           
            <Form.Group className="p-2">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company"
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
              placeholder="From: YYYY-MM-DD"
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
              placeholder="to: YYYY-MM-DD"
              required
              value={experience.endDate.substring(0, 10)}
              onChange={(e) => {
                handleInputChange("startDate", e.target.value);
              }}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="p-2">
          <Form.Label>Descrizione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={experience.description}
              onChange={(e) => {
                handleInputChange("description", e.target.value);
              }}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="p-2">
          <Form.Label>Luogo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Area"
              value={experience.area}
              onChange={(e) => {
                handleInputChange("area", e.target.value);
              }}
            ></Form.Control>
          </Form.Group >
          <div className="text-center">
          <Button variant="primary" type="submit" >
              Aggiungi
            </Button>
          </div>
            
          </Form>
        </Row>
      </div>
    );
  };

export default ExperienceForm;