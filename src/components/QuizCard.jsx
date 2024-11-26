import React from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';

const QuizCard = ({
  question,
  selectedOption,
  showAnswerFeedback,
  isAnswerCorrect,
  onOptionClick,
  onNextQuestion,
  isLastQuestion,
  currentQuestionIndex,
  totalQuestions,
  nextQuestionDelay,
}) => {
  // Return nothing if question is undefined
  if (!question) return null;

  const { options, answer, question: questionText } = question;

  const isSelected = (option) => selectedOption === option;
  const isCorrect = (option) => option === answer;

  const getOptionColor = (option) => {
    if (!showAnswerFeedback) return isSelected(option) ? 'primary' : 'default'; // Highlight selected option
    if (isSelected(option)) {
      return isCorrect(option) ? 'success' : 'error'; // Green if correct, red if incorrect
    }
    return 'default'; // No color if not selected
  };

  return (
    <Card sx={{ marginBottom: '20px' }}>
      <CardContent>
        {/* Display Question Number and Total Questions */}
        <Typography variant="body2" color="textSecondary">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </Typography>

        <Typography variant="h6" component="h3" sx={{ marginTop: 2 }}>
          {questionText}
        </Typography>

        <Grid container spacing={2}>
          {options.map((option, optionIndex) => (
            <Grid item xs={12} sm={6} key={optionIndex}>
              <Button
                variant="contained"
                color={getOptionColor(option)} // Set the color based on correctness
                onClick={() => onOptionClick(option)} // Handle option click
                fullWidth
                disabled={nextQuestionDelay} // Disable button during the next question delay
                sx={{
                  fontWeight: isSelected(option) ? 'bold' : 'normal', // Make selected option bold
                  border: isSelected(option) ? '2px solid black' : 'none', // Add a border to selected option
                }}
              >
                {option}
              </Button>
            </Grid>
          ))}
        </Grid>

        <div style={{ marginTop: '10px' }}>
          {isLastQuestion ? (
            <Button variant="contained" onClick={onNextQuestion} fullWidth disabled={nextQuestionDelay}>
              Finish Quiz
            </Button>
          ) : (
            <Button variant="contained" onClick={onNextQuestion} fullWidth disabled={nextQuestionDelay}>
              Next Question
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
