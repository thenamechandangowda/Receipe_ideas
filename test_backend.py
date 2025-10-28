import unittest
import requests
import json

class TestBackendAPI(unittest.TestCase):
    """Test cases for the Recipe Ideas backend API"""
    
    BASE_URL = "http://localhost:5000/api"
    
    def test_health_check(self):
        """Test the health check endpoint"""
        response = requests.get(f"{self.BASE_URL}/health")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "healthy")
    
    def test_search_recipes(self):
        """Test the search recipes endpoint"""
        # Test with a valid search term
        response = requests.get(f"{self.BASE_URL}/search", params={"q": "chicken"})
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("meals", data)
        self.assertIsInstance(data["meals"], list)
        
        # Test with an empty search term
        response = requests.get(f"{self.BASE_URL}/search", params={"q": ""})
        self.assertEqual(response.status_code, 400)
        
    def test_get_recipe_details(self):
        """Test the get recipe details endpoint"""
        # First get a recipe ID from search
        search_response = requests.get(f"{self.BASE_URL}/search", params={"q": "pasta"})
        search_data = search_response.json()
        
        if search_data["meals"] and len(search_data["meals"]) > 0:
            recipe_id = search_data["meals"][0]["idMeal"]
            
            # Test with a valid recipe ID
            response = requests.get(f"{self.BASE_URL}/recipe/{recipe_id}")
            self.assertEqual(response.status_code, 200)
            data = response.json()
            self.assertIn("meals", data)
            self.assertIsInstance(data["meals"], list)
            self.assertEqual(data["meals"][0]["idMeal"], recipe_id)
        
        # Test with an invalid recipe ID
        response = requests.get(f"{self.BASE_URL}/recipe/invalid_id")
        self.assertEqual(response.status_code, 200)  # API returns empty meals array, not an error
        
    def test_get_categories(self):
        """Test the get categories endpoint"""
        response = requests.get(f"{self.BASE_URL}/categories")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("categories", data)
        self.assertIsInstance(data["categories"], list)
    
    def test_get_random_recipe(self):
        """Test the get random recipe endpoint"""
        response = requests.get(f"{self.BASE_URL}/random")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("meals", data)
        self.assertIsInstance(data["meals"], list)
        self.assertEqual(len(data["meals"]), 1)  # Random endpoint returns exactly one meal

if __name__ == "__main__":
    print("Running backend API tests...")
    print("Make sure the Flask backend server is running on http://localhost:5000")
    unittest.main()