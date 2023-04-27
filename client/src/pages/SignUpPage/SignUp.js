import React from "react";
import Hero from "../../components/Hero";
import SignupScreen from "../../components/SignUp";
import BotBar from "../../components/BotBar";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./signup.scss"

const SignUp = () => {
  return (
    <div>
      <Hero />
      <SignupScreen />
      <br />
      <div className="fixed-bottom">
        <BotBar />
      </div>
    </div>
  );
};

export default SignUp;