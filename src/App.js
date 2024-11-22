// src/App.js
import React, { useState } from "react";
import QuizCard from "./components/QuizCard";
import ScoreCard from "./components/ScoreCard";
import questions from "./questions";
import { Stack } from "@mui/material";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    if (option === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1); // Increment score for correct answer
    }

    // Move to the next question after a 2-second delay
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        setSelectedAnswer(null); // Reset selected answer
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 500);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Quiz App</h1>

      <Stack direction="column" spacing={3} sx={{ position: "relative" }}>
        {/* Render the QuizCard or ScoreCard depending on the current question */}
        {currentQuestionIndex < questions.length ? (
          questions.map((question, index) => (
            <QuizCard
              key={index}
              currentQuestion={question}
              currentQuestionIndex={index}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
              handleAnswer={handleAnswer}
            />
          ))
        ) : (
          // Show ScoreCard when all questions are completed
          <ScoreCard
            score={score}
            totalQuestions={questions.length}
            restartQuiz={restartQuiz}
          />
        )}
      </Stack>
    </div>
  );
};

export default App;
