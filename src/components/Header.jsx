import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" expand="lg" variant='dark' collapseOnSelect>
        <Container> 
          <Navbar.Collapse id="basic-navbar-nav" className="me-auto justify-content-start">
            <Nav>
            <LinkContainer to='/ResourcesAndReferencesScreen'>
              <Nav.Link>المراجع و المصادر <i className="fa-solid fa-book"></i></Nav.Link>
            </LinkContainer>
            <LinkContainer to='/MedicalCentersScreen'>
              <Nav.Link>مراكز طبية <i className="fa-solid fa-hospital"></i></Nav.Link>
            </LinkContainer>
            <LinkContainer to='/EducationAndFamilyScreen'>
              <Nav.Link>التربية و العائلة <i className="fa-solid fa-person-breastfeeding"></i></Nav.Link>
            </LinkContainer>
            <LinkContainer to='/ChildhoodScreen'>
              <Nav.Link>مرحلة الطفولة <i className="fa-solid fa-baby"></i></Nav.Link>
            </LinkContainer>
            <LinkContainer to='/SymptomsAndCausesScreen'>
              <Nav.Link>الأعراض و الأسباب <i className="fa-solid fa-stethoscope"></i></Nav.Link>
            </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link>الرئيسية <i className='fas fa-home'></i></Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <LinkContainer to='/'>
            <Navbar.Brand>متلازمة داون <i className="fa-solid fa-hands-holding-child"></i></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
