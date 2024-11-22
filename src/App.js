// src/App.js
import React, { useState } from "react";
import QuizCard from "./components/QuizCard";
import ScoreCard from "./components/ScoreCard";
import questions from "./questions";

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
    console.log(currentQuestionIndex)
    // Move to the next question after a 2-second delay
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        setSelectedAnswer(null); // Reset selected answer
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 2000);
    }
  };

  const prevQuestion = () => {
    setSelectedAnswer(null); // Reset selected answer
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Quiz App</h1>

      {/* Render the QuizCard or ScoreCard depending on the current question */}
      {currentQuestionIndex < (questions.length) ? (
        <QuizCard
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswer}
          handleAnswer={handleAnswer}
          prevQuestion={prevQuestion}
        />
      ) : (
        // Show ScoreCard when all questions are completed
        <ScoreCard
          score={score}
          totalQuestions={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
};

export default App;
