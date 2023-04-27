import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className='botnav'>
      <Nav className="mx-auto pb-5 mb-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/search">Recipes</Link>
      </Nav>
    </Navbar>
  );
};

export default BottomNavbar;