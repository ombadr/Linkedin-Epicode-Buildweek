import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import { FaShieldAlt } from 'react-icons/fa';
import ISO6391 from 'iso-639-1';

const Footer = () => {
  const allLanguages = ISO6391.getAllNames().map((name, idx) => {
    const code = ISO6391.getCode(name);
    return (
      <option value={code} key={idx}>
        {name}
      </option>
    );
  });

  return (
    <Container className='text-secondary'>
      <Row>
        <Col md={2} className='fw-bold'>
          <p>About</p>
          <p>Community Guidelines</p>
          <p>Privacy & Terms</p>
          <p>Sales Solutions</p>
          <p>Safety Center</p>
        </Col>
        <Col md={2} className='fw-bold'>
          <p>Accessibility</p>
          <p>Careers</p>
          <p>Ad Choices</p>
          <p>Mobile</p>
        </Col>
        <Col md={2} className='fw-bold'>
          <p>Talent Solutions</p>
          <p>Marketing Solutions</p>
          <p>Advertising</p>
          <p>Small Business</p>
          <p>Safety Center</p>
        </Col>
        <Col md={4}>
          <div className='d-flex'>
            <AiFillQuestionCircle className='fs-2' />
            <div className='ms-2'>
              <p className='m-0 fw-bold fs-5'>Questions?</p>
              <p className='m-0'>Visit our Help Center.</p>
            </div>
          </div>
          <div className='d-flex'>
            <IoMdSettings className='fs-2' />

            <div className='ms-2'>
              <p className='m-0 fw-bold fs-5'>
                Manage your account and privacy
              </p>
              <p className='m-0'>Go to your Settings.</p>
            </div>
          </div>
          <div className='d-flex'>
            <FaShieldAlt className='fs-2' />
            <div className='ms-2'>
              <p className='m-0 fw-bold fs-5'>Recommendation transparency</p>
              <p className='m-0'>Learn more about Recommeneded Content.</p>
            </div>
          </div>
        </Col>
        <Col md={2}>
          <p className='m-0'>Select Language</p>
          <Form.Select aria-label='Select language' value='en'>
            {allLanguages}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>LinkedIn Corporation © 2024</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
