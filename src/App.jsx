import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'
import SearchBar from './components/SearchBar'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const searchRecipes = async (term) => {
    if (!term.trim()) return;
    
    setLoading(true);
    setError(null);
    setSelectedRecipe(null);
    setSearchTerm(term);
    
    try {
      // Use our backend API instead of directly calling TheMealDB
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/search?q=${term}`);
      const data = await response.json();
      
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError('No recipes found. Try a different search term.');
      }
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRecipeSelect = async (recipe) => {
    setLoading(true);
    try {
      // Fetch detailed recipe information from our backend
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/recipe/${recipe.idMeal}`);
      const data = await response.json();
      
      if (data.meals && data.meals[0]) {
        setSelectedRecipe(data.meals[0]);
      } else {
        setError('Failed to load recipe details.');
      }
    } catch (err) {
      setError('Failed to fetch recipe details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <SearchBar onSearch={searchRecipes} />
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">{error}</p>
          </div>
        ) : selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} onBack={handleBackToList} />
        ) : (
          <>
            {searchTerm && recipes.length > 0 && (
              <h2 className="text-xl font-semibold mb-4">Results for "{searchTerm}"</h2>
            )}
            <RecipeList recipes={recipes} onSelectRecipe={handleRecipeSelect} />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default App