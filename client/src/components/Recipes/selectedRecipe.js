import React from 'react';
import { Link } from 'react-router-dom';
import RecipeModal from '../../components/Modal/modal';
import Auth from "../../utils/auth";
// import ReviewList from '../../components/Comments/render';
// import AddReview from '../Comments/add';
import RecipeCard from './recipeCard';
import './index.scss'


function SelectedRecipe() {

  return (
    <div>
      <RecipeCard />
      {Auth.loggedIn() ? (
        <div>
          {/* <ReviewList /> */}
          <RecipeModal />
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
