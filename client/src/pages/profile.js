//jeff

import React from "react";
import AboutUs from "../components/aboutus";
import MealPlanList from "../components/mealPlanList";
import Calendar from "../components/calendar";
import RecipeList from "../components/recipelist";


const Profile = () => {
  return (
    <main>
      <div className="container">
        <AboutUs />
        <MealPlanList />
        <Calendar />
        <RecipeList/>
      </div>
    </main>
  );
};

export default Profile;