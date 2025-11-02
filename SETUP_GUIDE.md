# Quiz Setup Guide

## Current Issue
The quiz is showing "Failed to load questions" because the API endpoint is not set up yet.

## Solution - Two Options

### Option 1: Use Sample Questions (Quick Fix - Already Working!)
The quiz now automatically falls back to sample questions when the API is not available. Just open `quiz.html` in your browser and it will work with sample financial questions.

### Option 2: Set Up Backend API (Full Solution)

#### Step 1: Install Dependencies
Run this command in your terminal:
```bash
npm install
```

This will install:
- `express` - Web server framework
- `cors` - Enable cross-origin requests

#### Step 2: Start the Backend Server
In one terminal, run:
```bash
npm run server
```

You should see:
```
Server is running on http://localhost:3000
API endpoint: http://localhost:3000/api/financial-questions
```

#### Step 3: Open the Quiz
Open `quiz.html` in your browser. It will now fetch questions from the API.

## Testing the API

### Get All Questions
```bash
curl http://localhost:3000/api/financial-questions
```

### Get Questions by Difficulty
```bash
curl http://localhost:3000/api/financial-questions?difficulty=easy
```

### Get Limited Number of Questions
```bash
curl http://localhost:3000/api/financial-questions?count=3
```

### Get Random Question
```bash
curl http://localhost:3000/api/financial-questions/random
```

## How It Works Now

1. **Quiz loads** → Tries to fetch from API
2. **API not available** → Shows warning banner and uses sample questions
3. **API available** → Fetches and displays questions from server

## Customizing Questions

Edit `server.js` and modify the `financialQuestions` array to add your own questions following this format:

```javascript
{
    "question": "Your question here?",
    "options": [
        {"id": "A", "text": "Option A"},
        {"id": "B", "text": "Option B"},
        {"id": "C", "text": "Option C"},
        {"id": "D", "text": "Option D"}
    ],
    "correctAnswers": ["A"],
    "difficulty": "easy",
    "category": "Category Name",
    "explanation": "Explanation of the correct answer"
}
```

## Running Both Servers

To run the game and quiz together:

**Terminal 1** (Backend API):
```bash
npm run server
```

**Terminal 2** (Frontend Dev Server):
```bash
npm run dev
```

Then:
- Game: http://localhost:5173 (or whatever Vite shows)
- Quiz: Open `quiz.html` directly in browser
- API: http://localhost:3000/api/financial-questions

## Troubleshooting

### Quiz shows warning banner
- This is normal if the backend server is not running
- The quiz will still work with sample questions
- To remove the warning, start the backend server

### Port 3000 already in use
- Change the PORT in `server.js` (line 3)
- Update the API_URL in `quiz.html` (line 382)

### CORS errors
- Make sure the server is running
- The `cors` package is already configured in `server.js`
