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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0Mzk5YWZlMDMxZTAwMTliYTFkYTkiLCJpYXQiOjE3MDYwMDEyNzgsImV4cCI6MTcwNzIxMDg3OH0.YrtPpqEJRO5hxwFLZvfS8JL7SDepjzPf-LbDUAOTJok",
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
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Role"
                required
                value={experience.role}
                onChange={(e) => {
                  handleInputChange("role", e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
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
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Start Date"
                required
                value={experience.startDate}
                onChange={(e) => {
                  handleInputChange("startDate", e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="End Date"
                required
                value={experience.endDate}
                onChange={(e) => {
                  handleInputChange("endDate", e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Description"
                value={experience.description}
                onChange={(e) => {
                  handleInputChange("description", e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Area"
                required
                value={experience.area}
                onChange={(e) => {
                  handleInputChange("area", e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Aggiungi
            </Button>
          </Form>
        </Row>
      </div>
    );
  };

export default ExperienceForm;
