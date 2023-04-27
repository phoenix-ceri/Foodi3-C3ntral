import { useParams } from 'react-router-dom';
import {RecipeModal} from '../Modal/modal'

function SelectedRecipe({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === id);

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Description:</h3>
      <ol>
        {recipe.description.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ol>
      <RecipeModal />
    </div>
  );
}

export default SelectedRecipe;
