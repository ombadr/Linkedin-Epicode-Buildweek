import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import Example from './components/Example';
import Footer from './components/Footer';
import ProfileRightBar from './components/ProfileRightBar';


function App() {
  return (
    <div>

      <Container fluid className='bg-white sticky-navbar'>
        <Container className=" bg-white">
          <Row>
            <Col md={12}>
              <MyNavbar />
            </Col>
          </Row>
        </Container>
      </Container>
      <div style={{ backgroundColor: '#f4f2ee' }}>

        <Container >
          <Row>
            <Col md={9}>
              <Example />

            </Col>
            <Col md={3}>
              <ProfileRightBar />
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col col={12}>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
