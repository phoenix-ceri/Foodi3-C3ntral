import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './index.scss';

function CustomNavbar() {
  return (
    <Navbar className="my-top-nav" bg="light" expand="lg">
      <Container className='remove'>
        <Navbar.Toggle className="my-toggler" aria-controls="navbar-nav" />
        <Navbar.Collapse className="my-collapse" id="navbar-nav">
          <Nav className="m-auto my-nav-links">
            <Nav.Link className="my-nav-link " as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="my-nav-link " as={Link} to="/about">About</Nav.Link>
            <Nav.Link className="my-nav-link " as={Link} to="/contact">Contact</Nav.Link>
            <NavDropdown className="my-dropdown" title={<FontAwesomeIcon icon={faSignOutAlt} />} id="nav-dropdown">
              <NavDropdown.Item className="my-dropdown-item" as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
