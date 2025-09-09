// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavouritesList from './components/Favouriteslist';
import RecommendationList from './components/RecommendationList';
import { useRecipeStore } from './components/recipeStore';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
              <FavouritesList />
              <RecommendationList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeWrapper />} />
      </Routes>
    </Router>
  );
}

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

const EditRecipeWrapper = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  return <EditRecipeForm recipe={recipe} />;
};

export default App;
