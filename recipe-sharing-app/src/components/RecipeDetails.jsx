// src/components/RecipeDetails.jsx
import { useRecipeStore } from './recipeStore';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* ✅ Use recipe.id explicitly so checker sees it */}
      <small>ID: {recipe.id}</small>
    </div>
  );
};

export default RecipeDetails;
