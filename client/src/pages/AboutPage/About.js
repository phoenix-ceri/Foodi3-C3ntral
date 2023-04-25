import React from "react";
import Hero from "../../components/Hero";
import AboutTeamPage from "../../components/About";
import TopBar from "../../components/TopBar";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./About.css";

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <TopBar />
      <AboutTeamPage />
    </div>
  );
};

export default AboutPage;

