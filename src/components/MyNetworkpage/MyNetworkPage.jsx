import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNetworkTop from './MyNetworkTop';
import MyNetworkBelow from './MyNetworkBelow';

const MyNetworkPage = () => {
  return (
    <Container>
      <Row>
        <Col md={3} className='mt-3'>
          <h1>My Network</h1>
        </Col>
        <Col md={9} className='mt-3 px-3'>
          <MyNetworkTop />
          <MyNetworkBelow />
        </Col>
      </Row>
    </Container>
  );
};

export default MyNetworkPage;
