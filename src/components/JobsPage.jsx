import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RecentJobSearches from './RecentJobSearches';
import JobsCard from './JobsCard';
const JobsPage = () => {
  return (
    <Container>
      <Row c>
        <Col md={2} className='mt-3'>
          <h2>Hello</h2>
        </Col>
        <Col md={6} className='mt-3 mx-3'>
          <RecentJobSearches />
          <JobsCard
            title='Recommended for you'
            category='software development'
          />
          <JobsCard title='Still Hiring' category='marketing' />
          <JobsCard title='Hiring in your network' category='writing' />
          <JobsCard title='Recommended for you' category='product' />
        </Col>
        <Col md={4} className='mt-3'>
          <h2>Hello</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default JobsPage;
