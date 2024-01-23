import { useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  InputGroup,
  Container,
  Row,
  Col,
  Offcanvas,
} from 'react-bootstrap';
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineMessage,
  AiOutlineTeam,
} from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { BsBriefcase } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import './MyNavbar.css';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdWorkspacePremium } from 'react-icons/md';
import { Fetchprofilo } from './Fetchprofilo';
import { FaPlayCircle } from 'react-icons/fa';
import { ImStatsBars2 } from 'react-icons/im';
import { MdPostAdd } from 'react-icons/md';
import { TbTargetArrow } from 'react-icons/tb';
import { FaCompass } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { MdHomeRepairService } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const profilopersonale = Fetchprofilo().profile
  console.log(profilopersonale)

  const handleSidebar = () => {
    setShow(!show);
  };

  return (
    <>{profilopersonale && (
      <>
        <Navbar expand='lg' className='mb-3 sticky-navbar bg-white'>
          <Navbar.Brand href='#home'>
            <FaLinkedin className='text-primary fs-1' />
          </Navbar.Brand>
          <Form inline>
            <InputGroup className='custom-input-group'>
              <InputGroup.Text className='bg-light border-0'>
                <AiOutlineSearch className='fs-2' />
              </InputGroup.Text>
              <FormControl
                type='text'
                placeholder='Search'
                className='bg-light border-0 fs-4'
              />
            </InputGroup>
          </Form>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav className='mr-auto align-items-center'>
              <Nav.Link href='#home' className='text-center'>
                <AiOutlineHome className='fs-2' />
                <p className='m-0'>Home</p>
              </Nav.Link>
              <Nav.Link href='#network' className='text-center'>
                <AiOutlineTeam className='fs-2' />
                <p className='m-0'>My Network</p>
              </Nav.Link>
              <Nav.Link href='#jobs' className='text-center'>
                <BsBriefcase className='fs-2' />
                <p className='m-0'>Jobs</p>
              </Nav.Link>
              <Nav.Link href='#messaging' className='text-center'>
                <AiOutlineMessage className='fs-2' />
                <p className='m-0'>Messaging</p>
              </Nav.Link>
              <Nav.Link href='#notifications' className='text-center'>
                <AiOutlineBell className='fs-2' />
                <p className='m-0'>Notifications</p>
              </Nav.Link>
              <Nav.Link href='#settings' className='text-center p-0 m-0'>
                <IoMdPerson className='fs-2 me-3' />
                <NavDropdown
                  title='Me'
                  id='basic-nav-dropdown'
                  className='p-0 me-3 '
                >
                  <NavDropdown.Item href='#example' className='p-0 m-0'>
                    <div>
                      <div className='d-flex mb-3'>
                        <img
                          src={profilopersonale.image}
                          height='50px'
                          width='50px'
                          className='rounded-circle mx-3'
                        />
                        <div className='me-5'>
                          <p className='m-0 fw-bold'>{profilopersonale.name} {profilopersonale.surname}</p>
                          <p className='m-0'>{profilopersonale.title}</p>
                        </div>
                      </div>
                      <div className='mx-3'>
                        <Button href={'/'+profilopersonale._id}
                          variant='outline-primary'
                          className='rounded-5 w-100 py-0 my-0'
                        >
                          View Profile
                        </Button>
                      </div>
                      <hr />
                      <div className=''>
                        <p className='fw-bold fs-4 mx-3'>Account</p>
                        <p className='mx-2'>
                          <MdWorkspacePremium className='text-warning fs-4 p-0 m-0' />
                          Try Premium for €0
                        </p>
                        <p className='mx-3'>Settings & Privacy</p>
                        <p className='mx-3'>Help</p>
                        <p className='mx-3'>Language</p>
                      </div>
                      <hr />
                      <div>
                        <p className='fw-bold fs-4 mx-3'>Manage</p>
  
                        <p className='mx-3'>Posts & Activity</p>
                        <p className='mx-3'>Job Posting Account</p>
                      </div>
                      <hr />
                      <div className='mx-3'>
                        <p>Sign Out</p>
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
  
              <Nav.Link
                href='#settings'
                className='text-center p-0 m-0'
                onClick={handleSidebar}
              >
                <BsFillGrid3X3GapFill className='fs-2' />
                <NavDropdown
                  title='For Business'
                  id='basic-nav-dropdown'
                  className='p-0 m-0'
                ></NavDropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant='outline-warning border-0' id='try-premium'>
            Try Premium for €0
          </Button>
        </Navbar>
  
        <Offcanvas show={show} onHide={handleSidebar} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='fw-bold'>For Business</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className='border border-1 p-3 rounded-2'>
              <p className='fs-4'>Visit More Linkedin Products</p>
              <hr />
              <div className='d-flex flex-wrap'>
                <Container>
                  <Row>
                    <Col md={4} className='text-center'>
                      <FaPlayCircle
                        className='border border-1 rounded-2 p-2'
                        style={{ fontSize: '45px' }}
                      />
                      <p className='text-center'>Find new clients</p>
                    </Col>
  
                    <Col md={4} className='text-center'>
                      <ImStatsBars2
                        className='border border-1 rounded-2 p-2'
                        style={{ fontSize: '45px' }}
                      />
                      <p className='text-center'>Talent Insights</p>
                    </Col>
                    <Col md={4} className='text-center'>
                      <MdPostAdd
                        className='border border-1 rounded-2 p-2'
                        style={{ fontSize: '45px' }}
                      />
                      <p className='text-center'>Post a job</p>
                    </Col>
                    <Col md={4} className='text-center'>
                      <TbTargetArrow
                        className='border border-1 rounded-2 p-2'
                        style={{ fontSize: '45px' }}
                      />
                      <p className='text-center'>Advertise</p>
                    </Col>
                    <Col md={4} className='text-center'>
                      <FaCompass
                        className='border border-1 rounded-2 p-2'
                        style={{ fontSize: '45px' }}
                      />
                      <p className='text-center'>Find new clients</p>
                    </Col>
                    <Col md={4} className='text-center'>
                      <HiUserGroup
                        className='border border-1 rounded-2 p-2'
                        style={{ fontSize: '45px' }}
                      />
                      <p className='text-center'>Groups</p>
                    </Col>
                    <Col md={4} className='text-center'>
                      <MdHomeRepairService
                        className='border border-1 rounded-2 p-2'
                        style={{ fontSize: '45px' }}
                      />
                      <p className='text-center'>Services Marketplace</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className='border border-1 p-3 rounded-2'>
              <p className='fs-4'>Explore more for business</p>
              <hr />
              <div className='mb-3'>
                <p className='m-0 fw-bold'>Hire on Linkedin</p>
                <p className='m-0'>Find, attract and recruit talent</p>
              </div>
              <div className='mb-3'>
                <p className='m-0 fw-bold'>Sell with Linkedin</p>
                <p className='m-0'>Unlock sales opportunities</p>
              </div>
              <div className='mb-3'>
                <p className='m-0 fw-bold'>Post a job for free</p>
                <p className='m-0'>Get qualified applicants quickly</p>
              </div>
              <div className='mb-3'>
                <p className='m-0 fw-bold'>Advertise on Linkedin</p>
                <p className='m-0'>Acquire customers and grow your business</p>
              </div>
              <div className='mb-3'>
                <p className='m-0 fw-bold'>Learn with Linkedin</p>
                <p className='m-0'>Courses to develop your employees</p>
              </div>
              <div className='mb-3'>
                <p className='m-0 fw-bold'>Admin Center</p>
                <p className='m-0'>Manage billing and account details</p>
              </div>
              <hr />
              <div>
                <p className='m-0 fw-bold'>
                  Create a Company Page <FaPlus />
                </p>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )}
      
    </>
  );
};

export default MyNavbar;
