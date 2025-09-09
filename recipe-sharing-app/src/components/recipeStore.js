// src/components/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // Recipes
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // Search & Filtering
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  // Favorites
  favourites: [],
  addFavourite: (recipeId) =>
    set((state) => ({ favourites: [...state.favourites, recipeId] })),
  removeFavourite: (recipeId) =>
    set((state) => ({ favourites: state.favourites.filter((id) => id !== recipeId) })),

  // Recommendations
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
