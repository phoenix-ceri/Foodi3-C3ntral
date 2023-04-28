import React from "react";
import Search from "../../components/Recipes/recipeSearch";
import HeroImage from "../../components/Hero";
import SideBar from "../../components/SNav";
import TopBar from "../../components/TopBar";

const SearchPage = () => {
    return (
        <div>
            <HeroImage />
            <div className="topNavRecipe" >
                <TopBar visibility="hidden" />
            </div>
            <Search />
            <SideBar />
        </div>
    )
}

export default SearchPage;