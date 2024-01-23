import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Profile from './Profile';

import ModificaProfilo from './ModificaProfilo';
import Analisi from './Analisi';
import Risorse from './Risorse';
import Attivita from './Attivita';
import Formazione from './Formazione';
import Interessi from './Interessi';
import SideBar from './SideBar';

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <Profile />
          <ModificaProfilo />
          <Analisi />
          <Risorse />
          <Attivita />
          <Formazione />
          <Interessi />
        </Col>
        <Col md={3}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
