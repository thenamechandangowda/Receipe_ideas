import requests
from ..utils.cache_manager import cache

# TheMealDB API base URL
MEALDB_API_BASE = "https://www.themealdb.com/api/json/v1/1"

def search_recipes(search_term):
    """Search recipes by name with caching"""
    # Check cache first
    cache_key = f"search_{search_term}"
    cached_result = cache.get(cache_key)
    if cached_result:
        return cached_result
    
    # If not in cache, fetch from API
    response = requests.get(f"{MEALDB_API_BASE}/search.php?s={search_term}")
    data = response.json()
    
    # Cache the result for 1 hour (3600 seconds)
    cache.set(cache_key, data, timeout=3600)
    
    return data

def get_recipe_details(recipe_id):
    """Get detailed information about a specific recipe with caching"""
    # Check cache first
    cache_key = f"recipe_{recipe_id}"
    cached_result = cache.get(cache_key)
    if cached_result:
        return cached_result
    
    # If not in cache, fetch from API
    response = requests.get(f"{MEALDB_API_BASE}/lookup.php?i={recipe_id}")
    data = response.json()
    
    # Cache the result for 1 day (86400 seconds)
    cache.set(cache_key, data, timeout=86400)
    
    return data

def get_categories():
    """Get all meal categories with caching"""
    # Check cache first
    cache_key = "categories"
    cached_result = cache.get(cache_key)
    if cached_result:
        return cached_result
    
    # If not in cache, fetch from API
    response = requests.get(f"{MEALDB_API_BASE}/categories.php")
    data = response.json()
    
    # Cache the result for 1 day (86400 seconds)
    cache.set(cache_key, data, timeout=86400)
    
    return data

def get_random_recipe():
    """Get a random recipe (no caching for random)"""
    response = requests.get(f"{MEALDB_API_BASE}/random.php")
    return response.json()