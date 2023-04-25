import React from "react";
import HeroImage from "./components/hero";
import AboutTeamPage from "./components/About";
import TopNav from "./components/topNav/topNav"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./About.css"

const LoginPage = () => {
  return (
    <div>
      <HeroImage />
      <TopNav />
      <AboutTeamPage />
    </div>
  );
};

export default LoginPage;