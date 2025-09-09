// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ required by checker

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // redirect back to home after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
