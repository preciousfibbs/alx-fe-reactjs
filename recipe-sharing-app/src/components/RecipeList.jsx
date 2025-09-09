// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  if (!recipes || recipes.length === 0) return <p>No recipes found.</p>;

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
            <DeleteRecipeButton recipeId={recipe.id} />
            {favorites.includes(recipe.id) ? (
              <button onClick={() => removeFavorite(recipe.id)}>Remove Favorite</button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>Add Favorite</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
