import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <Container>
        <Row>
          <Col className='text-center py-3 text-light'>Developed By Mohamed Hamdy &#10084;</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
