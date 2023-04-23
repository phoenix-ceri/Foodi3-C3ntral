// jeff

import React from 'react';

const RecipeList = ({ recipes, title }) => {
  if (!recipes.length) {
    return <h3>No Recipes Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {recipes &&
        recipes.map((recipe) => (
          <div key={recipe._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {recipe.recipeUser} <br />
              <span style={{ fontSize: '1rem' }}>
                created recipe on {recipe.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecipeList;
