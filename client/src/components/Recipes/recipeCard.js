import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const REACT_APP_API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

function RecipeCard(props) {
  const { id } = useParams();
  const [recipeCard, setRecipeCard] = useState({});
  const { selectedRecipeId } = props;

  useEffect(() => {
    const fetchRecipeCard = async () => {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${selectedRecipeId}/card?${REACT_APP_API_KEY}`);
      setRecipeCard(response.data);
    };

    fetchRecipeCard();
  }, [id]);

  return (
    <div>
      <h1>{recipeCard.title}</h1>
      <img src={recipeCard.image} alt={recipeCard.title} />
      <p>{recipeCard.description}</p>
    </div>
  );
}

export default RecipeCard;
