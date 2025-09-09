// src/components/FavoritesList.jsx
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const FavouritesList = () => {
  const favourites = useRecipeStore((state) =>
    state.favourites.map((id) => state.recipes.find((r) => r.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavourite);

  if (!favourites || favourites.length === 0) return <p>No favourites yet.</p>;

  return (
    <div>
      <h2>My Favourites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavourite(recipe.id)}>Remove Favorite</button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default FavouritesList;
