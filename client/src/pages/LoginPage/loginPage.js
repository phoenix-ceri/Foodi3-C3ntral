import React from "react";
import HeroImage from "./components/hero";
import LoginScreen from ".../components/login";
import BottomNavbar from "./components/Navbars/botNav";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
const LoginPage = () => {
  return (
    <div>
      <HeroImage />
      <LoginScreen />
      <br/>
      <BottomNavbar />
    </div>
  );
};

export default LoginPage;