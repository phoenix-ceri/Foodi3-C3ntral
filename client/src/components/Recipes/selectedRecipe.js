import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeModal from '../../components/Modal/modal';
import Auth from "../../utils/auth";
// import ReviewList from '../../components/Comments/render';
// import AddReview from '../Comments/add';
import RecipeCard from './recipeCard';
import './index.scss'


function SelectedRecipe() {
  const [recipeCard, setRecipeCard] = useState({});
  return (
    <div>
      <RecipeCard recipeCard={recipeCard} setRecipeCard={setRecipeCard} />
      {Auth.loggedIn() ? (
        <div>
          {/* <ReviewList /> */}
          <RecipeModal recipeCard={recipeCard} setRecipeCard={setRecipeCard} />
          {/* <AddReview /> */}
        </div>
      ) : (
        <>
              {/* <ReviewList /> */}
                <div className='suggestion'>Would you like to <Link className='loginLinkSuggestion' to='/login'>Log in</Link> or <Link className='loginLinkSuggestion' to="/signup">Sign up </Link>to leave a review and/or save this recipe to your meal plan?</div>
                </>
      )}
    </div>

  );
}

export default SelectedRecipe;
