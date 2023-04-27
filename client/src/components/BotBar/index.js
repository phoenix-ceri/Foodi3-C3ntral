import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const BottomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className='botnav'>
      <Nav className="mx-auto pb-5 mb-5">
        <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#about">About Us</Nav.Link>
        <Nav.Link href="#contact">Recipes</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default BottomNavbar;