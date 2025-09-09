// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// after existing imports in src/main.jsx
import { useRecipeStore } from './components/recipeStore';

// Seed only when empty (do not commit seed if you want blank initial state)
const seed = () => {
  const setRecipes = useRecipeStore.getState().setRecipes;
  const recipes = useRecipeStore.getState().recipes;
  if (!recipes || recipes.length === 0) {
    setRecipes([
      { id: '1', title: 'Sample Pancakes', description: 'Easy pancakes recipe' },
    ]);
  }
};
seed();
