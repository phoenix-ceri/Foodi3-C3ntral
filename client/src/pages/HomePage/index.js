import React from 'react';
import Hero from "../../components/Hero"; 
import TopBar from "../../components/TopBar"; 
import Footer from "../../components/Footer";
import Welcome from '../../components/Welcome';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const Home = () => {
    return (
        <div>
            <Hero />
            <TopBar />
            <br/>
            <Welcome />
            <Footer />
        </div>
    );
};

export default Home;