import React from 'react';
import { Container } from 'react-bootstrap';
import "./index.css"

function Welcome() {
  const companyName = "Foodi3 C3ntral";
  const description = "This is a meal planner application for foodies, by foodies. Search through our database of recipes to find a recipe that fits your diet and lifestyle! Log in or Sign up to save the recipes you like to the calendar on your profile and to be able to view other user's comments (and maybe add your own as well!)";
  
  return (
    <Container>
      <div className="welcome-container">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to {companyName}!</h1>
          <p className="welcome-description">{description}</p>
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
