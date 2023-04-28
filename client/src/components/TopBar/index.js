import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './index.scss';
import Auth from "../../utils/auth";

function TopNav() {

  function showTopNav() {
    if (Auth.loggedIn()) {
      return (
        <Navbar className="my-top-nav" bg="light" expand="lg">
          <Container className='remove'>
            <Navbar.Toggle className="my-toggler" aria-controls="navbar-nav" />
            <Navbar.Collapse className="my-collapse" id="navbar-nav">
              <Nav className="m-auto my-nav-links">
                <Nav.Link className="my-nav-link " as={Link} to="/profile">Home</Nav.Link>
                <Nav.Link className="my-nav-link " as={Link} to="/about">About</Nav.Link>
                <Nav.Link className="my-nav-link " as={Link} to="/search">Recipes</Nav.Link>
                <NavDropdown className="my-dropdown" title={<FontAwesomeIcon icon={faSignOutAlt} />} id="nav-dropdown">
                  <NavDropdown.Item className="my-dropdown-item" as={Link} to="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <div>
          <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto my-nav-links">
                <Link className='my-nav-link' to="/">Home</Link>
                <Link className='my-nav-link' to="/about">About</Link>
                <Link className='my-nav-link' to="/search">Recipes</Link>
                <Link className='my-nav-link' to="/signup">SignUp</Link>
                <Link className='my-nav-link' to="/login">Login</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
    }
  }
  return (
    <div>
      {showTopNav()}
    </div>
  );
}

//old topnav code
// function TopNav() {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg" sticky="top">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="m-auto">
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/search">Recipes</Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }

//old topnav code
// function TopNav() {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg" sticky="top">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="m-auto">
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/search">Recipes</Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }

export default TopNav;
