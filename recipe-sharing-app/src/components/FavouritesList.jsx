import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const FavouritesList = () => {
  const favourites = useRecipeStore((state) =>
    state.favourites.map((id) => state.recipes.find((r) => r.id === id))
  );
  const removeFavourite = useRecipeStore((state) => state.removeFavourite);

  if (!favourites || favorites.length === 0) return <p>No favourites yet.</p>;

  return (
    <div>
      <h2>My Favourites</h2>
      {favourites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavourite(recipe.id)}>Remove Favourite</button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default FavouritesList;
