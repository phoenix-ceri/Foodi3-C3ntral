import React from 'react';
import RecipeModal from '../../components/Modal/modal';
import Auth from "../../utils/auth";

function SelectedRecipe() {
   return (
    //to be replaced with API call
    <div>
      {/* API Call*/}
      {Auth.loggedIn() ? (
        <RecipeModal />
      ) : (
        <span>(Log in to save this recipe to your meal plan!)</span>
      )}
    </div>
  );

    // function showRecipeModal() {
    //   if (Auth.loggedIn()) {
    //     return (
    //       <div>
    //         <RecipeModal />
    //       </div>
    //     );
    //   } else {
    //     return
    //   }

    // }
}

export default SelectedRecipe;
