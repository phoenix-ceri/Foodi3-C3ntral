import React from "react";
import Hero from "../../components/Hero";
import SignupScreen from "../../components/SignUp";
import TopNav from "../../components/TopBar";
import Footer from "../../components/Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./signup.scss"

const SignUp = () => {
  return (
    <div>
      <Hero />
      <TopNav/>
      <br/>
      <SignupScreen />
      <Footer/>
    </div>
  );
};

export default SignUp;