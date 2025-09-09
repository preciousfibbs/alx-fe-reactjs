// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return;
    const newRecipe = { id: Date.now().toString(), title, description };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    // navigate to the new recipe details page
    navigate(`/recipes/${newRecipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
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
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
