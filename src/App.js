import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Homepage  from './components/Homepage/Homepage';

import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './components/Layout/MyNavbar';
import Footer from './components/Layout/Footer';

import JobsPage from './components/Jobspage/JobsPage';

import Posts from './components/Posts/Posts';
import Mainprofile from './components/Profilepage/Mainprofile';
import MyNetworkPage from './components/MyNetworkpage/MyNetworkPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          <div>
            <Container fluid className='bg-white sticky-navbar'>
              <Container className=" bg-white">
                <Row>
                  <Col md={12} style={{ height: '50px' }}>
                    <MyNavbar />
                  </Col>
                </Row>
              </Container>
            </Container>
            <div style={{ backgroundColor: '#f4f2ee' }}>
              <Container>
                <Row>
                  <Routes>
                    <Route path="/:id" element={<Mainprofile />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="/home" element={<Posts />} />
                    <Route path='/my-network' element={<MyNetworkPage />} />
                  </Routes>
                </Row>
                <Row className='mt-5'>
                  <Col col={12}>
                    <Footer />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        }>
        </Route>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
