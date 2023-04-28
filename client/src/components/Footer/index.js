//jeff

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./index.scss"

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 p-0 bg-black fixed-bottom justify-content-center footer">
      <div className="container px-5 mx-auto text-center">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <p className='.fs-6 text fw-bolder m-0 white'>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Foodi3 C3ntral team.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
