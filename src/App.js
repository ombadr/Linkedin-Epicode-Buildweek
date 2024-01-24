import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';

import JobsPage from './components/JobsPage';
import Posts from './components/Posts';
import Mainprofile from './components/Profilepage/Mainprofile';

function App() {
  return (
    <BrowserRouter>
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
                <Routes>
                  <Route path="/:id" element={
                      <Mainprofile/>
                  }>
                  </Route>
                  <Route path="/jobs" element={<JobsPage />} />
                </Routes>
            </Row>
            <Row className='mt-5'>
              <Col col={12}>
                <Footer />
              </Col>
            </Row>
            <hr />
            <Posts />
          </Container>
        </div>
      </div>

    </BrowserRouter>


  );
}

export default App;
