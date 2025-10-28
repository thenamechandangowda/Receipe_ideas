import React from 'react';

const RecipeDetail = ({ recipe, onBack }) => {
  // Extract all ingredients and measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient,
        measure: measure || ''
      });
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={recipe.strMealThumb} 
          alt={recipe.strMeal} 
          className="w-full h-64 object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{recipe.strMeal}</h2>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
            {recipe.strCategory}
          </span>
          {recipe.strArea && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {recipe.strArea} Cuisine
            </span>
          )}
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ingredients.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                <span className="font-medium">{item.measure}</span>
                <span className="ml-1">{item.ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Instructions</h3>
          <div className="space-y-4">
            {recipe.strInstructions.split('\r\n\r\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-gray-700">{paragraph}</p>
              )
            ))}
          </div>
        </div>
        
        {recipe.strYoutube && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Video Tutorial</h3>
            <a 
              href={recipe.strYoutube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Watch on YouTube
            </a>
          </div>
        )}
        
        {recipe.strSource && (
          <div>
            <h3 className="text-xl font-semibold mb-3">Source</h3>
            <a 
              href={recipe.strSource} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              Original Recipe
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;