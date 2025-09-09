// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = { id: recipe.id, title, description };
    updateRecipe(updated);
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
