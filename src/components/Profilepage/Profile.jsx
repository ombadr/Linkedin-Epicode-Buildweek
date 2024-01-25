import { Col, Container, Row, Button } from 'react-bootstrap';
import { PiStudent } from 'react-icons/pi';
import { FaCamera } from 'react-icons/fa';
import { useState } from 'react';
import { Infoprofilo } from './Infoprofilo';
import './assets/Profile.css';


function Profile({ isMe, profilo,handleRedo }) {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [modifica, setmodifica] = useState(false);
  return (
    <div>
      {profilo && (
        <Container className='immaginebg p-3 border rounded bg-white mt-2 '>
          <Row>
            <Col>
              <img
                className=' margincustom  mb-4 rounded-circle'
                width={140}
                src={profilo.image}
                alt=''
                srcset=''
              />
            </Col>
            {isMe === true && (
              <Col className='m-3 d-flex  justify-content-end  '>
                <div
                  className='bg-white p-2 rounded-circle  '
                  style={{ height: ' 60px' }}
                >
                  <FaCamera className='' size={40} />
                </div>
              </Col>
            )}
          </Row>
          <Row>
            <Col>
              <h3 className='m-0'>
                {profilo.name} {profilo.surname}
              </h3>
              <h4 className='mb-3'>{profilo.title} presso Epicode</h4>
              <div className='d-flex'>
                <p className='m-0 text-secondary '>{profilo.area} </p>
                <p className='  ms-4 m-0 text-primary'>
                  Informazioni di contatto
                </p>
              </div>
              <p className='mb-2 mt-2  text-primary '>5 collegamenti</p>
              {isMe === true ? (
                <>
                  <div>
                    <Button
                      onClick={() => {
                        setmodifica(true);
                        setShowInfoModal(true);
                      }}
                      className=' me-2 rounded-5 fw-bold '
                    >
                      Modifica Profilo
                    </Button>
                    <Button
                      onClick={() => setShowInfoModal(true)}
                      className='bg-white text-secondary fw-bold  rounded-5 '
                    >
                      Info sul profilo
                    </Button>
                    <Infoprofilo
                      profilo={profilo}
                      show={showInfoModal}
                      handleRedo={handleRedo}
                      modifica={modifica}
                      handleClose={() => {
                        setmodifica(false);
                        setShowInfoModal(false);
                      }}
                    />
                  </div>
                  <div className='bgcustom rounded-3'>
                    <div className=' mb-2 mt-2'>
                      <p className='m-0 fw-bold'>Disponibile a lavorare</p>
                      <p>Ruolo di Full-stack Developer</p>
                    </div>
                    <span className='text-primary'>Mostra dettagli</span>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Button className=' me-2 rounded-5 fw-bold '>
                      Messaggio
                    </Button>
                  </div>
                  <div className='bgcustom2 rounded-3 '>
                    <div className=' mb-2 mt-2 d-flex align-items-center p-4'>
                      <p className='m-0 fw-bold pe-2'>
                        Collegati se vi conoscete
                      </p>
                      <Button className='bg-white text-secondary fw-bold  rounded-5 '>
                        Collegati
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Col>
            <Col>
              <div className='d-flex justify-content-center '>
                <PiStudent size={30} />
                <p>Istituto Epicode</p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
export default Profile;
