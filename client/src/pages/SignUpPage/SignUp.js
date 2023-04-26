import React from "react";
import Hero from "../../components/Hero";
import SignupScreen from "../../components/SignUp";
import BotBar from "../../components/BotBar";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./signup.css"

const SignUp = () => {
  return (
    <div>
      <Hero />
      <SignupScreen />
      <br/>
      <BotBar />
    </div>
  );
};

export default SignUp;