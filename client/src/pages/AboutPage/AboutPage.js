import React from "react";
import Hero from "../../components/Hero";
import AboutTeamPage from "../../components/About";
import TopNav from "../../components/TopBar";
import Footer from "../../components/Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./About.scss";

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <TopNav />
      <div className="flexyboi">
        <AboutTeamPage />
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;

