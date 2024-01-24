import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './components/Layout/MyNavbar';
import Footer from './components/Layout/Footer';

import JobsPage from './components/Jobspage/JobsPage';
import ProfilePage from './components/ProfilePage';

import Posts from './components/Posts/Posts';

import SideBar from './components/Profilepage/SideBar';
import ProfiliRandom from './components/Profilepage/ProfiliRandom';
import Mainprofile from './components/Profilepage/Mainprofile';

function App() {
  return (
    <BrowserRouter>
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
          <Routes>
            <Route path="/:id" element={<ProfilePage />} />
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>

          <Container >
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
