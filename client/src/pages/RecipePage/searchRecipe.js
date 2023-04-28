import React from "react";
import Search from "../../components/Recipes/recipeSearch";
import HeroImage from "../../components/Hero";
import SideBar from "../../components/SideBar";

const SearchPage = () => {
    return (
        <div>
            <HeroImage />
            <Search />
            <SideBar />
        </div>
    )
}

export default SearchPage;