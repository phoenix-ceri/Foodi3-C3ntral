import React from 'react';
import { Link } from 'react-router-dom';

//may need to be { recipe } instead of props, but maybe does the same thing? 
function RecipeButton(props) {
  const { recipeId } = props;

  return (
    <Link to={`/recipes/${recipeId}`}>
      <button>View Recipe</button>
    </Link>
  );
}

export default RecipeButton;
