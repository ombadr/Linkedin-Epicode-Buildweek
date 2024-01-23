import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fetchprofilo from './components/Fetchprofilo';

import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';

import Analisi from './components/Analisi';
import Risorse from "./components/Risorse";
import Attivita from "./components/Attivita";
import Formazione from "./components/Formazione";
import Interessi from "./components/Interessi";
import ModificaProfilo from "./components/ModificaProfilo";
import SideBar from './components/SideBar';

import ProfileTest from './components/ProfileTest';
import Experiences from './components/Experiences';

import ProfiliRandom from './components/ProfiliRanom';
import JobsPage from './components/JobsPage';
import ProfilePage from './components/ProfilePage';
import { useSelector } from 'react-redux';


import Posts from './components/Posts';

function App() {

  const isSearchPerformed = useSelector(
    (state) => state.performSearch.searchPerformed
  );

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
          <Routes>
            <Route path="/:id" element={<ProfilePage />} />
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>

          <Container >

            <Row>
              <Col md={9}>
                <Routes>
                  <Route path="/:id" element={
                    <ProfileTest />
                    
                  }>
                  </Route>
                </Routes>
               
                <ModificaProfilo />
                <Analisi />
                <Risorse />
                <Attivita />
                <Formazione />
                <Interessi />
                <Experiences />

              </Col>
              
              <Col md={3}>
              <SideBar/>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col col={12}>

                <Footer />
              </Col>
            </Row>
            <hr />
            <Posts/>
          </Container>
        </div>
      </div>

    </BrowserRouter>


  );
}

export default App;
