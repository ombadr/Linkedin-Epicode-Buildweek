import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNetworkTop from './MyNetworkTop';
import MyNetworkBelow from './MyNetworkBelow';
import MyNetworkSide from './MyNetworkSide';

const MyNetworkPage = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <MyNetworkSide />
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
