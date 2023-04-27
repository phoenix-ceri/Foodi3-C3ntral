import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";

function BottomNavbar() {

  function showBotNav() {
    if (Auth.loggedIn()) {
      return (
        <Navbar bg="dark" variant="dark" className='botnav'>
        <Nav className="mx-auto pb-5 mb-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/search">Recipes</Link>
          <a href="/" onClick={() => Auth.logout()}>
              Logout
          </a>
        </Nav>
      </Navbar>
      );
    } else {
        return (
      <Navbar bg="dark" variant="dark" className='botnav'>
      <Nav className="mx-auto pb-5 mb-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/search">Recipes</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/login">Login</Link>
      </Nav>
    </Navbar>
        );
    }
  }
  return (
    <div>
      {showBotNav()}
    </div>
  );
}

//old navbar code
// const BottomNavbar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" className='botnav'>
//       <Nav className="mx-auto pb-5 mb-5">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/search">Recipes</Link>
//       </Nav>
//     </Navbar>
//   );
// };

export default BottomNavbar;