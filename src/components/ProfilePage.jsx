import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Profile from './Profilepage/Profile';

import ModificaProfilo from './Profilepage/ModificaProfilo';
import Analisi from './Profilepage/Analisi';
import Risorse from './Profilepage/Risorse';
import Attivita from './Profilepage/Attivita';
import Formazione from './Profilepage/Formazione';
import Interessi from './Profilepage/Interessi';
import SideBar from './Profilepage/SideBar';

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
