# CodeSandbox Deployment Guide

## What Was Fixed

Your frontend and backend are now configured to work properly in CodeSandbox. Here's what was changed:

### 1. Frontend Updates (`src/App.jsx`)
- ✅ Updated API calls to use environment variables instead of hardcoded `localhost:5000`
- ✅ Now reads `VITE_API_URL` environment variable for flexible deployment

### 2. Vite Configuration (`vite.config.js`)
- ✅ Added environment variable support to expose API URL to client-side code

### 3. CodeSandbox Configuration
- ✅ Created `sandbox.config.json` - Main sandbox configuration
- ✅ Created `.codesandbox/tasks.json` - Runs both frontend and backend automatically
- ✅ Updated `package.json` - Added start script for CodeSandbox

### 4. Git Configuration
- ✅ Updated `.gitignore` to exclude Python cache files and CodeSandbox directories

## How to Deploy to CodeSandbox

### Option 1: GitHub Import (Recommended)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Configure for CodeSandbox deployment"
   git push origin main
   ```

2. Go to [codesandbox.io](https://codesandbox.io)
3. Click "Create Sandbox" → "Import from GitHub"
4. Enter your repository URL
5. CodeSandbox will automatically detect and configure the project

### Option 2: Direct Upload
1. Go to [codesandbox.io](https://codesandbox.io)
2. Click "Create Sandbox" → "Import Project"
3. Drag and drop your project folder or upload as ZIP

### Option 3: CLI Import
```bash
npx codesandbox import
```

## What Happens in CodeSandbox

### Automatic Setup
Once imported, CodeSandbox will:
- ✅ Install Node.js dependencies (`npm install`)
- ✅ Install Python dependencies (`pip install -r requirements.txt`)
- ✅ Start the frontend development server on port 5173
- ✅ Start the backend Flask server on port 5000

### Port Configuration
- **Frontend**: Port 5173 (automatically exposed)
- **Backend**: Port 5000 (accessible to frontend)

### Environment Variables
The frontend will automatically connect to the backend. No manual configuration needed!

## Testing Your Deployment

1. Wait for both servers to start (check the terminal)
2. Click on the frontend preview URL (usually port 5173)
3. Try searching for a recipe (e.g., "pasta")
4. Verify that recipes load correctly

### Troubleshooting

**Issue: Frontend can't connect to backend**
- Check that both terminal tasks are running (frontend and backend)
- Verify backend is accessible at `/api/health` endpoint
- Check browser console for CORS errors

**Issue: Module not found**
- Ensure all dependencies are installed
- Check `requirements.txt` for Python packages
- Check `package.json` for Node.js packages

**Issue: Environment variables not working**
- In CodeSandbox, go to Settings → Environment Variables
- Add: `VITE_API_URL=http://localhost:5000`

## Local Development

To run locally:

```bash
# Terminal 1: Backend
pip install -r requirements.txt
python app.py

# Terminal 2: Frontend
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Project Structure

```
Receipe_ideas/
├── .codesandbox/
│   └── tasks.json          # CodeSandbox task configuration
├── backend/                # Python Flask backend
│   ├── services/
│   │   └── recipe_service.py
│   └── utils/
│       └── cache_manager.py
├── src/                    # React frontend
│   ├── components/
│   └── App.jsx
├── app.py                  # Flask entry point
├── sandbox.config.json     # CodeSandbox config
├── requirements.txt        # Python dependencies
└── package.json            # Node dependencies
```

## Summary

✅ Frontend and backend are now properly configured
✅ CodeSandbox ready with automatic server startup
✅ Environment variables properly configured
✅ Both servers will run simultaneously
✅ Ready to deploy!

Your application is now ready for CodeSandbox deployment!


