import React from "react";
import Hero from "../../components/Hero";
import AboutTeamPage from "../../components/About";
import TopBar from "../../components/TopBar";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./About.css";
import recipeSearch from "../../components/Recipes/recipeSearch";

const AboutPage = () => {
  return (
    <div>
      <recipeSearch />
      <Hero />
      <TopBar />
      <AboutTeamPage />
    </div>
  );
};

export default AboutPage;

