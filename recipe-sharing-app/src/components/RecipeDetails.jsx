// src/components/RecipeDetails.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '20px' }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: '10px' }}>
          Edit Recipe
        </Link>
        <button onClick={handleDelete}>Delete Recipe</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
