import React, { useState } from 'react';
import RecipeModal from '../../components/Modal/modal';
import Auth from "../../utils/auth";
import axios from 'axios';
import { useMutation } from '@apollo/client';
import { ADD_RECIPE, ADD_RECIPE_DETAILS } from '../../utils/mutations';
import CommentSection from '../../components/Comments/render';
import AddComment from '../../components/Comments/add';
import RecipeCard from './recipeCard';

const REACT_APP_API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

function SelectedRecipe() {
  const [query, setQuery] = useState('');
  const [recipeCard, setRecipeCard] = useState({});
  const [addRecipe] = useMutation(ADD_RECIPE);
  const [addRecipeDetails] = useMutation(ADD_RECIPE_DETAILS);

  
  
  
  return (
    //to be replaced with API call
    <div>
      <RecipeCard />
      {/* <CommentSection /> */}
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
