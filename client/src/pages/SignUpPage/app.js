import React from "react";
import HeroImage from "./components/hero";
import SignupScreen from "./components/Signup";
import BottomNavbar from "./components/Navbars/botNav";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
const LoginPage = () => {
  return (
    <div>
      <HeroImage />
      <SignupScreen />
      <br/>
      <BottomNavbar />
    </div>
  );
};

export default LoginPage;