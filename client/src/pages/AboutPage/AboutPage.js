import React from "react";
import Hero from "../../components/Hero";
import AboutTeamPage from "../../components/About";
import TopBar from "../../components/TopBar";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./About.css";
import RecipeSearch from "../../components/Recipes/recipeSearch";

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

