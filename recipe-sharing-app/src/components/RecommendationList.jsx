// src/components/RecommendationsList.jsx
import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationList = () => {
  const recommendations = useRecipeStore((state) => state.recommendation);
  const generateRecommendation = useRecipeStore((state) => state.generateRecommendation);

  useEffect(() => {
    generateRecommendation();
  }, [generateRecommendation]);

  if (!recommendation || recommendation.length === 0) return <p>No recommendation yet.</p>;

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendation.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationList;
