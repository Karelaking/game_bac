# 🎮 Quiz Application - Quick Start Guide

## ✅ Status: READY TO USE!

The API is working perfectly and the quiz is fully configured.

## 🚀 How to Use

### The Server is Already Running!
Your API server is currently running on **http://localhost:3001**

### To Use the Quiz:

**Option 1: Direct File Access**
1. Navigate to: `d:\Downloads\game_bac\`
2. Double-click `quiz.html`
3. The quiz will automatically load 5 financial questions from your API
4. Answer the questions and click "Submit Quiz"

**Option 2: From Browser**
1. Open your web browser
2. Press `Ctrl + O` (or File → Open)
3. Navigate to `d:\Downloads\game_bac\quiz.html`
4. Click Open

## 📊 What You'll See

1. **Quiz loads** → Shows "Loading questions..."
2. **Questions appear** → 5 financial questions with:
   - Question text
   - Category (e.g., "Financial Planning", "Investment")
   - Difficulty level (easy/medium)
   - 4 multiple choice options (A, B, C, D)
3. **Select answers** → Click on your choice for each question
4. **Submit** → Click "Submit Quiz" button
5. **Results** → See detailed results with:
   - Your score and percentage
   - ✓ or ✗ for each question
   - Your answer vs correct answer
   - Explanations for all questions

## 🔄 Features

- **Retry Quiz** - Get new questions from the API
- **Detailed Feedback** - See explanations for every answer
- **Beautiful UI** - Retro gaming style with smooth animations
- **Responsive** - Works on all screen sizes

## 🔧 API Information

**Endpoint:** http://localhost:3001/api/financial-questions

**Current Questions:** 5 financial literacy questions covering:
- Financial Planning (budgeting)
- Financial Terms (APR)
- Investment (liquid assets, compound interest, diversification)

**API Features:**
- Get all questions: `http://localhost:3001/api/financial-questions`
- Filter by difficulty: `?difficulty=easy` or `?difficulty=medium`
- Limit count: `?count=3`
- Random question: `http://localhost:3001/api/financial-questions/random`

## 📝 Adding More Questions

To add more questions, edit `server.js` and add to the `financialQuestions` array:

```javascript
{
    "question": "Your question here?",
    "options": [
        {"id": "A", "text": "Option A"},
        {"id": "B", "text": "Option B"},
        {"id": "C", "text": "Option C"},
        {"id": "D", "text": "Option D"}
    ],
    "correctAnswers": ["A"],  // Can have multiple: ["A", "B"]
    "difficulty": "easy",      // easy, medium, or hard
    "category": "Category Name",
    "explanation": "Why this answer is correct"
}
```

Then restart the server:
```bash
# Stop current server (Ctrl+C in the terminal)
# Start again:
node server.js
```

## 🛠️ Troubleshooting

### Quiz shows sample questions with warning banner
- The API server might not be running
- Restart it: `node server.js`
- Check it's on port 3001

### Server won't start
- Port 3001 might be in use
- Change the port in `server.js` (line 4)
- Update `quiz.html` API_URL (line 382)

### Questions don't load
- Check browser console (F12) for errors
- Verify API is running: Open `test-api.html` in browser
- Check CORS is enabled (already configured)

## 📂 File Structure

```
game_bac/
├── quiz.html          ← Main quiz file (OPEN THIS)
├── server.js          ← API server (RUNNING)
├── test-api.html      ← Test API connection
├── QUICK_START.md     ← This file
└── SOLUTION.md        ← Technical details
```

## 🎯 Next Steps

1. **Open quiz.html** in your browser
2. **Take the quiz** - Answer all 5 questions
3. **See your results** - Get detailed feedback
4. **Try again** - Click "Retry Quiz" for another attempt

---

**Everything is ready! Just open `quiz.html` and start the quiz! 🎉**
