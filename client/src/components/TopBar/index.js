import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/search">Recipes</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;
