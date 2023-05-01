import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import './index.scss'

const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

function RecipeCard(props) {
  const { state } = useLocation();
  const { id } = useParams();
  const { recipeCard, setRecipeCard } = props;
  setRecipeCard(state);


  useEffect(() => {
    const fetchRecipeCard = async () => {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
      setRecipeCard(response.data);
      console.log(recipeCard)
    };
    if (!recipeCard) {
      fetchRecipeCard();
    }
  }, [recipeCard]);
  if (!recipeCard) {
    return null;
  }
  return (
    <div className='container-RecipeCard' data-id={recipeCard.id}>
      <div className='selectedRecipeTitle'>
        <h1>{recipeCard.title}</h1>

      </div>
      <img src={recipeCard.image} alt={recipeCard.title} />
      <p>{recipeCard.instructions}</p>
    </div>
  );
}

export default RecipeCard;
