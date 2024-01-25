import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import MyNetworkTopCard from './MyNetworkTopCard';

const MyNetworkTop = () => {
  return (
    <Card>
      <Card.Header className='bg-white'>
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <h2 className='fs-4'>Your Network</h2>
          <Button variant='outline-secondary' className='m-0 fw-bold border-0'>
            Manage
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <MyNetworkTopCard />
      </Card.Body>
    </Card>
  );
};

export default MyNetworkTop;
