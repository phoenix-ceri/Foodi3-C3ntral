import React from 'react';
import RecipeList from './recipeList';

function SelectedRecipe(props) {
  const { recipe } = props;

  if (!recipe) {
    return <div>Please select a recipe</div>;
  }

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const recipes = [
    // ...
  ];


  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <a href={recipe.url}>Link to Recipe</a>

      <h1>My Recipeies</h1>
      <RecipeList recipes={recipes} onRecipeSelect={handleRecipeSelect} />
      <SelectedRecipe recipe={selectedRecipe} />
    </div>
  );
}

export default SelectedRecipe;
