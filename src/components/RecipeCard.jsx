import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  // Extract first 3 ingredients for preview
  const previewIngredients = [];
  for (let i = 1; i <= 3; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    if (ingredient && ingredient.trim()) {
      previewIngredients.push(ingredient);
    }
  }

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(recipe)}
    >
      <img 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-600 mb-2">Category: {recipe.strCategory}</p>
        
        {previewIngredients.length > 0 && (
          <div className="mt-2">
            <p className="text-xs text-gray-500 mb-1">Main ingredients:</p>
            <ul className="text-sm">
              {previewIngredients.map((ingredient, index) => (
                <li key={index} className="inline-block mr-2 mb-1">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                    {ingredient}
                  </span>
                </li>
              ))}
              {previewIngredients.length > 0 && (
                <li className="inline-block">
                  <span className="text-orange-500 text-xs">+ more</span>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;