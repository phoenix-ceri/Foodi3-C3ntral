import React from "react";
import Hero from "../../components/Hero";
import AboutTeamPage from "../../components/About";
import TopBar from "../../components/TopBar";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./About.scss";

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <TopBar />
      <div className="flexyboi">
        <AboutTeamPage />
      </div>
    </div>
  );
};

export default AboutPage;

