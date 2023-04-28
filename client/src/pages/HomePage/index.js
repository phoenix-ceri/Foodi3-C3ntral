import React from 'react';
import Hero from "../../components/Hero"; 
import TopBar from "../../components/TopBar"; 
import Footer from "../../components/Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const Home = () => {
    return (
        <div>
            <Hero />
            <TopBar />
            <h2>Welcome to Foodi3-C3ntral!</h2>
            <p>This is a meal planner application for foodies, by foodies. Search through our database of recipes to find a recipe that fits your diet and lifestyle! Log in or Sign up to save the recipes you like to the calendar on your profile and to be able to view other user's comments (and maybe add your own as well!)</p>
            <Footer />
        </div>
    );
};

export default Home;