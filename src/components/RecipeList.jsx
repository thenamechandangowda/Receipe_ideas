import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  if (!recipes.length) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Search for recipes to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recipes.map(recipe => (
        <RecipeCard 
          key={recipe.idMeal} 
          recipe={recipe} 
          onClick={onSelectRecipe} 
        />
      ))}
    </div>
  );
};

export default RecipeList;