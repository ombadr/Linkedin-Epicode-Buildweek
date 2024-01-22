import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer';
function App() {
  return (
    <div>

      <Container>
        <Row>
          <Col md={9}>
            <h1>hello</h1>
          </Col>
          <Col md={3}>
            <h1>world!</h1>
          </Col>
        </Row>
        <Row>
          <Col col={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
