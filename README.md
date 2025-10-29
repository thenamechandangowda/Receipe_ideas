
# Recipe Ideas

## Project Overview
Recipe Ideas is a web application that allows users to search for recipes by dish name and view detailed information about each recipe. The application uses a Python Flask backend to fetch data from TheMealDB API and displays recipe details such as name, image, ingredients, and cooking instructions through a React frontend.

## Features
- Search for recipes by dish name
- Display search results in a responsive card layout
- View detailed recipe information including:
  - Ingredients and measurements
  - Step-by-step cooking instructions
  - Recipe category and cuisine type
  - YouTube video tutorial (when available)
  - Link to the original recipe source (when available)
- Loading indicator during API fetch
- Error handling for failed searches
- Responsive design for mobile and desktop

## API Used
This project uses [TheMealDB API](https://www.themealdb.com/api.php), a free meal recipe database. Specifically, it uses the search endpoint:
```
https://www.themealdb.com/api/json/v1/1/search.php?s={recipeName}
```

## Tech Stack
- **Frontend**:
  - React with Vite
  - Tailwind CSS
  - React useState and useEffect hooks
  - Fetch API for data fetching
- **Backend**:
  - Python Flask
  - Flask-CORS for cross-origin requests
  - Cachelib for API response caching
  - Requests library for API calls

## How to Run Locally

### Frontend Setup
1. Clone the repository
   ```bash
   git clone <repository-url>
   cd recipe-ideas
   ```

2. Install frontend dependencies
   ```bash
   npm install
   ```

3. Start the frontend development server
   ```bash
   npm run dev
   ```

### Backend Setup
1. Install Python backend dependencies
   ```bash
   pip install -r requirements.txt
   ```

2. Start the Flask backend server
   ```bash
   python app.py
   ```

3. Open your browser and navigate to `http://localhost:5173` to access the application
   (The backend API will be available at `http://localhost:5000`)

## Project Structure
```
/
├── public/
├── src/                      # Frontend React code
│   ├── assets/
│   │   └── favicon.svg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeDetail.jsx
│   │   ├── RecipeList.jsx
│   │   └── SearchBar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── backend/                  # Backend Python code
│   ├── __init__.py
│   ├── routes.py             # API endpoints
│   ├── services/
│   │   ├── __init__.py
│   │   └── recipe_service.py # Service for TheMealDB API calls
│   └── utils/
│       ├── __init__.py
│       └── cache_manager.py  # Caching utility
├── app.py                    # Flask application entry point
├── .env                      # Environment variables (not in repo)
├── .env.example              # Example environment variables
├── requirements.txt          # Python dependencies
├── index.html
├── package.json              # Node.js dependencies
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## AI Assistance
This project was developed with assistance from Cursor AI. The AI helped with:
- Setting up the React project structure
- Implementing components and their styling with Tailwind CSS
- Creating the API integration with TheMealDB
- Designing the responsive layout
- Error handling and loading state management

## Deployment to CodeSandbox

### Quick Start

1. **Import to CodeSandbox:**
   - Go to [codesandbox.io](https://codesandbox.io)
   - Click "Import from GitHub" or "Import from CLI"
   - Or directly go to: `https://codesandbox.io/s/github/yourusername/receipe_ideas`

2. **Environment Setup:**
   - The project will automatically detect the configuration from `sandbox.config.json`
   - Both frontend and backend will start automatically

3. **Configuration:**
   - Frontend runs on port 5173 (automatically exposed)
   - Backend runs on port 5000
   - The frontend automatically connects to the backend via environment variables

### CodeSandbox Configuration

The project includes:
- `sandbox.config.json` - Main sandbox configuration
- `.codesandbox/tasks.json` - Runs both frontend and backend simultaneously

### Environment Variables

In CodeSandbox, you can set environment variables in the "Environment Variables" section:
```
VITE_API_URL=http://localhost:5000
```

Or leave it blank to use the default localhost backend.

### Troubleshooting

If the frontend can't connect to the backend:
1. Check that both servers are running (should be automatic in CodeSandbox)
2. Verify the backend is accessible at the health endpoint: `/api/health`
3. Check the browser console for any CORS errors

## Author
Chandan Gowda

## License
This project is open source and available for educational purposes.

