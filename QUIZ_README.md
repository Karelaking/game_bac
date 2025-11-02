# Quiz Application - Usage Guide

## Overview
The quiz application has been refactored to dynamically fetch and display questions from an API endpoint.

## API Integration

### Endpoint
```
http://localhost:3000/api/financial-questions
```

### Expected Response Format
The API should return either a single question object or an array of question objects in the following format:

```json
{
  "question": "Question text here?",
  "options": [
    {"id": "A", "text": "Option A text"},
    {"id": "B", "text": "Option B text"},
    {"id": "C", "text": "Option C text"},
    {"id": "D", "text": "Option D text"}
  ],
  "correctAnswers": ["A"],
  "difficulty": "easy|medium|hard",
  "category": "Specific category name",
  "explanation": "Brief explanation of the correct answer"
}
```

### Multiple Questions
For multiple questions, return an array:
```json
[
  { /* question 1 */ },
  { /* question 2 */ },
  { /* question 3 */ }
]
```

## Features

### Dynamic Question Loading
- Questions are fetched from the API when the page loads
- Loading state is displayed while fetching
- Error handling with retry button if fetch fails

### Question Display
- Each question shows:
  - Question number and text
  - Category and difficulty level
  - Multiple choice options (A, B, C, D)
  
### Answer Selection
- Click on any option to select it
- Selected option is highlighted
- Can change selection before submitting

### Results Display
- Shows total score and percentage
- Detailed breakdown for each question:
  - ✓ or ✗ indicator
  - User's answer
  - Correct answer (if wrong)
  - Explanation for each question
- Color-coded results (green for correct, red for incorrect)

### Actions
- **Submit Quiz**: Calculate and display results
- **Retry Quiz**: Fetch new questions and start over
- **Close Window**: Close the quiz window

## Usage

1. Ensure your backend server is running on `http://localhost:3000`
2. Open `quiz.html` in a web browser
3. Questions will automatically load from the API
4. Select answers for all questions
5. Click "Submit Quiz" to see results
6. Click "Retry Quiz" to get new questions

## Customization

### Change API Endpoint
Edit the `API_URL` constant in the JavaScript section:
```javascript
const API_URL = 'http://localhost:3000/api/financial-questions';
```

### Manual Question Loading
You can also manually load questions using the `loadQuizFromAPI()` function:
```javascript
loadQuizFromAPI(yourQuestionData);
```

## Error Handling
- Network errors are caught and displayed
- Retry button allows re-fetching questions
- Console logs provide debugging information

## Browser Compatibility
- Modern browsers with ES6+ support
- Fetch API support required
- Tested on Chrome, Firefox, Edge
