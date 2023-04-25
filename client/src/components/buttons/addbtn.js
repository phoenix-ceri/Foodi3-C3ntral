import React, { useState } from 'react';

function AddRecipeButton({ recipe, recipes, setRecipes }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddClick = () => {
    setIsAdded(true);
    setRecipes([...recipes, recipe]);
  };

  return (
    <button disabled={isAdded} onClick={handleAddClick}>
      {isAdded ? 'Added!' : 'Add to list'}
    </button>
  );
}
export default AddRecipeButton;