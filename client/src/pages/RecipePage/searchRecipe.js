import React from "react";
import Search from "../../components/Recipes/recipeSearch";
import HeroImage from "../../components/Hero";
import Sidebar from "../../components/Sidebar";

const SearchPage = () => {
    return (
        <div>
            <HeroImage />
            <Search />
            <Sidebar />
        </div>
    )
}

export default SearchPage;