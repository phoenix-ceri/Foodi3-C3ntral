import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function TopNav() {
  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Recipes</Nav.Link>
            <Nav.Link href="#link">My Plans</Nav.Link>
            <Nav.Link href="#about">Meal Plans</Nav.Link>
            <Nav.Link href="#contact">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;
