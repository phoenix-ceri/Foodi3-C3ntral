import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";

function TopNav() {

  function showTopNav() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <Navbar bg="light" expand="lg" sticky="top" className='topNavStyle'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/search">Recipes</Link>
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/search">Recipes</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/login">Login</Link>
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

export default TopNav;
