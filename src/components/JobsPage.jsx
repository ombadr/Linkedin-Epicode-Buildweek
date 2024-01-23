import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobsNav from "./JobsNav"
import JobsWork from "./JobsWork"
const JobsPage = () => {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <JobsNav/>
        </Col>
        <Col md={6}>
          <h2>Hello</h2>
        </Col>
        <Col md={4}>
        <JobsWork/>
        </Col>
      </Row>
    </Container>
  );
};

export default JobsPage;
