import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import { FetchProfiles } from '../Fetchprofilo';
const MyNetworkBelow = () => {
  const [profiles, setProfiles] = useState([]);

  const profileData = async () => {
    try {
      const profilesData = await FetchProfiles('');
      const shuffleProfiles = profilesData.sort(() => 0.5 - Math.random());
      const selectedProfiles = shuffleProfiles.slice(0, 6);
      setProfiles(selectedProfiles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  useEffect(() => {
    if (profiles.length > 0) {
      console.log(profiles);
    }
  }, [profiles]);

  return (
    <Card className='mt-3'>
      <Card.Header className='bg-white'>
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <h2 className='fs-4'>
            People you might know based on your recent activity
          </h2>
          <Button variant='outline-secondary' className='m-0 fw-bold border-0'>
            Show All
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row className='justify-content-center'>
            {profiles &&
              profiles.map((profile, index) => {
                return (
                  <Col md={3} className='m-2' key={index}>
                    <a href={'/'+profile._id}>
                      <Card
                        style={{ width: '15rem', height: '22rem' }}
                        className='d-flex flex-column'
                        
                      >
                        <Card.Body className='flex-grow-1 text-center'>
                          <Card.Img
                            variant='top'
                            src={profile.image}
                            style={{
                              width: '120px',
                              height: '120px',
                              borderRadius: '50%',
                              margin: '10px auto',
                            }}
                          />
                          <Card.Title className='text-center mt-2'>
                            {profile.name || 'Undefined'}
                          </Card.Title>
                          <Card.Subtitle className='mb-2 text-muted text-center'>
                            {profile.title || 'Undefined'}
                          </Card.Subtitle>
                          <Card.Text className='text-center mt-auto'>
                            3 mutual connections
                          </Card.Text>
                        </Card.Body>
                        <Button
                          variant='primary'
                          className='d-flex align-items-center justify-content-center mt-auto mb-3 mx-3'
                        >
                          <FaUserPlus className='me-2' /> Connect
                        </Button>
                      </Card>
                    </a>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default MyNetworkBelow;
