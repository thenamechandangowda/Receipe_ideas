from flask import Blueprint, request, jsonify
from .services import recipe_service

# Create a Blueprint for recipe routes
recipe_bp = Blueprint('recipes', __name__, url_prefix='/api')

@recipe_bp.route('/search', methods=['GET'])
def search_recipes():
    """Search recipes by name"""
    search_term = request.args.get('q', '')
    if not search_term.strip():
        return jsonify({"error": "Search term is required"}), 400
    
    try:
        data = recipe_service.search_recipes(search_term)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@recipe_bp.route('/recipe/<string:id>', methods=['GET'])
def get_recipe_details(id):
    """Get detailed information about a specific recipe"""
    if not id:
        return jsonify({"error": "Recipe ID is required"}), 400
    
    try:
        data = recipe_service.get_recipe_details(id)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@recipe_bp.route('/categories', methods=['GET'])
def get_categories():
    """Get all meal categories"""
    try:
        data = recipe_service.get_categories()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@recipe_bp.route('/random', methods=['GET'])
def get_random_recipe():
    """Get a random recipe"""
    try:
        data = recipe_service.get_random_recipe()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@recipe_bp.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy"})