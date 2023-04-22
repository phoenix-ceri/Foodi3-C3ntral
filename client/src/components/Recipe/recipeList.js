import React from 'react';

function RecipeList(props) {

  const recipesList = [
    {
      id: 1,
      name: 'PB&J',
      description: 'Peanut Butter & Jelly Sandwhich.',
      ingredients: ['Peanut Butter', 'Jelly', 'Bread'],
      url: 'https://www.baycare.net/media/5194/pbj-baycare-clinic-blog.jpg',
    },
    {
      id: 2,
      name: 'Grilled Chicken Salad',
      description: 'Healthy and refreshing salad with grilled chicken.',
      ingredients: ['chicken breast', 'lettuce', 'tomato', 'cucumber', 'avocado'],
      url: 'https://cdn.healthyrecipes101.com/recipes/images/chickens/grilled-chicken-salad-recipe-claxsgjpq001g321bdz8abd4r.webp?w=1080&q=75',
    },
    {
      id: 3,
      name: 'Bacon & Cheese Burger',
      description: 'Bacon & Cheese Hamburger.',
      ingredients: ['Beef Patty', 'Bacon', 'Cheese', 'Lettuce', 'Tomato', 'Onions', 'Mayo', 'Ketchup'],
      url: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2022-03_bacon-cheeseburger%2F2022-03-16_ATK-0561',
    },
  ];

  const { recipes } = props;

  const renderRecipes = () => {
    return recipes.map((recipe) => (
      <li key={recipe.id}>
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <a href={recipe.url}>Link to Recipe</a>
      </li>
    ));
  };

  return (
    <div>
      <h2>My Recipes</h2>
      <ul>{renderRecipes()}</ul>
      <p> {recipesList}</p>
    </div>
  );
}

export default RecipeList;
