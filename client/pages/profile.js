jeff

import React from "react";
import AboutUs from "../components/aboutus";
import MealPlanList from "../components/mealPlanList";
import RecipeList from "../components/recipelist";



const Profile = () => {
  return (
    <main>
      <div className="container">
        <AboutUs />
        <MyCalander />
        <MealPlanList />
        <RecipeList/>
      </div>
    </main>
  );
};

export default Profile;