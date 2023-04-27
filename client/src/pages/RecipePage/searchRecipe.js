import React from "react";
import Search from "../../components/Recipes/recipeSearch";
import HeroImage from "../../components/Hero/index";
import Sidebar from "../../components/SideBar";

const SearchPage = () => {
    return (
        <div>
            <HeroImage/>
            <Search />
            <Sidebar/>
        </div>
    )
}

export default SearchPage;