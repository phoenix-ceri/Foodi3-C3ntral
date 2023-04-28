import React from 'react';
import Selected from '../../components/Recipes/selectedRecipe';
import Hero from "../../components/Hero";
import TopNav from "../../components/TopBar";
import "./selectRecipe.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SelectRecipe = () => {
    return (
     <div>
        <Hero />
        <TopNav />
        <Selected />

     </div>
    );
};

export default SelectRecipe; 



