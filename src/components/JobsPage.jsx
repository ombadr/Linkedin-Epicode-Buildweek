import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RecentJobSearches from './RecentJobSearches';
import JobsNav from './JobsNav';
import JobsWork from './JobsWork';
import JobsCard from './JobsCard';
const JobsPage = () => {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <JobsNav />
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
        <Col md={3}>
          <JobsWork />
        </Col>
      </Row>
    </Container>
  );
};

export default JobsPage;
