import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ModificaProfilo = () => {
  const [profilo, setProfilo] = useState({
    name: "Mario",
    surname: "Rossi",
    email: "mario@rossi.it",
    username: "mario88",
    bio: "Freelance developer",
    title: "Full Stack Web Developer",
    area: "Milan",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          body: JSON.stringify(profilo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        setProfilo({
          name: "Mario",
          surname: "Rossi",
          email: "mario@rossi.it",
          username: "mario88",
          bio: "Freelance developer",
          title: "Full Stack Web Developer",
          area: "Milan",
        });
      } else {
        throw new Error("Errore nel salvataggio del profilo");
      }
    } catch (error) {
      console.log("Errore:", error);
    }
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center mt-3">
          <Col md={6}>
            <h2 className="text-center">Modifica Profilo!</h2>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={profilo.name}
                  required
                  value={profilo.name}
                  onChange={(e) => {
                    setProfilo({
                      ...profilo,
                      name: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Il tuo Cognome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={profilo.surname}
                  required
                  value={profilo.surname}
                  onChange={(e) => {
                    setProfilo({
                      ...profilo,
                      name: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Modifica!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ModificaProfilo;
