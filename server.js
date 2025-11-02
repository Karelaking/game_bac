const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());
app.use(express.json());

// Sample financial questions data
const financialQuestions = [
    {
        "question": "What is the primary purpose of a budget?",
        "options": [
            {"id": "A", "text": "To track income and expenses"},
            {"id": "B", "text": "To increase debt"},
            {"id": "C", "text": "To avoid paying taxes"},
            {"id": "D", "text": "To hide money"}
        ],
        "correctAnswers": ["A"],
        "difficulty": "easy",
        "category": "Financial Planning",
        "explanation": "A budget helps you track your income and expenses to manage your finances effectively."
    },
    {
        "question": "What does APR stand for in finance?",
        "options": [
            {"id": "A", "text": "Annual Payment Rate"},
            {"id": "B", "text": "Annual Percentage Rate"},
            {"id": "C", "text": "Average Price Range"},
            {"id": "D", "text": "Automated Payment Request"}
        ],
        "correctAnswers": ["B"],
        "difficulty": "medium",
        "category": "Financial Terms",
        "explanation": "APR stands for Annual Percentage Rate, which represents the yearly cost of borrowing money."
    },
    {
        "question": "Which of the following is considered a liquid asset?",
        "options": [
            {"id": "A", "text": "Real estate"},
            {"id": "B", "text": "Cash in savings account"},
            {"id": "C", "text": "Retirement account"},
            {"id": "D", "text": "Collectibles"}
        ],
        "correctAnswers": ["B"],
        "difficulty": "medium",
        "category": "Investment",
        "explanation": "Cash in a savings account is a liquid asset because it can be quickly converted to cash without losing value."
    },
    {
        "question": "What is compound interest?",
        "options": [
            {"id": "A", "text": "Interest calculated only on the principal amount"},
            {"id": "B", "text": "Interest calculated on principal plus accumulated interest"},
            {"id": "C", "text": "A type of bank account"},
            {"id": "D", "text": "A government tax"}
        ],
        "correctAnswers": ["B"],
        "difficulty": "medium",
        "category": "Investment",
        "explanation": "Compound interest is interest calculated on the initial principal and also on the accumulated interest from previous periods."
    },
    {
        "question": "What is diversification in investing?",
        "options": [
            {"id": "A", "text": "Putting all money in one stock"},
            {"id": "B", "text": "Spreading investments across different assets"},
            {"id": "C", "text": "Only investing in bonds"},
            {"id": "D", "text": "Avoiding the stock market"}
        ],
        "correctAnswers": ["B"],
        "difficulty": "easy",
        "category": "Investment Strategy",
        "explanation": "Diversification means spreading your investments across different types of assets to reduce risk."
    }
];

// API endpoint to get financial questions
app.get('/api/financial-questions', (req, res) => {
    // You can add query parameters to filter by difficulty, category, etc.
    const { difficulty, category, count } = req.query;
    
    let filteredQuestions = [...financialQuestions];
    
    // Filter by difficulty if provided
    if (difficulty) {
        filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
    }
    
    // Filter by category if provided
    if (category) {
        filteredQuestions = filteredQuestions.filter(q => q.category === category);
    }
    
    // Limit number of questions if count is provided
    if (count) {
        const numQuestions = parseInt(count);
        filteredQuestions = filteredQuestions.slice(0, numQuestions);
    }
    
    res.json(filteredQuestions);
});

// API endpoint to get a single random question
app.get('/api/financial-questions/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * financialQuestions.length);
    res.json(financialQuestions[randomIndex]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/api/financial-questions`);
});
