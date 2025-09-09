// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet. Add one above!</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}
        >
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div>
            <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: '10px' }}>
              Edit
            </Link>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
