import React, { useState } from "react";

const App = () => {
  // Hardcoded JSON data
  const questions = [
    {
      question: "What is the primary role of a human resources department?",
      answer: "To manage employee relations and ensure organizational effectiveness.",
      options: [
        "To manage finances",
        "To oversee marketing strategies",
        "To manage employee relations and ensure organizational effectiveness.",
        "To handle product development",
      ],
    },
    {
      question: "Which document outlines the rights and responsibilities of employees?",
      answer: "Employee handbook",
      options: [
        "Job description",
        "Employee handbook",
        "Performance review",
        "Company policy",
      ],
    },
    {
      question: "What is recruitment?",
      answer: "The process of finding and hiring the right candidates for job positions.",
      options: [
        "The process of training employees",
        "The process of finding and hiring the right candidates for job positions.",
        "The process of evaluating employee performance",
        "The process of creating company policies",
      ],
    },
    {
      question: "What does 'onboarding' refer to?",
      answer: "The process of integrating a new employee into an organization.",
      options: [
        "The process of evaluating employee performance",
        "The process of integrating a new employee into an organization.",
        "The process of promoting employees",
        "The process of terminating employees",
      ],
    },
    {
      question: "Which of the following is a common method of performance evaluation?",
      answer: "360-degree feedback",
      options: [
        "Job rotation",
        "360-degree feedback",
        "Team building exercises",
        "Employee surveys",
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const currentQuestion = questions[currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (option) => {
    setSelectedAnswer(option); // Set the selected answer
  };
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Quiz App</h1>
      {currentQuestion && (
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              marginBottom: "16px",
            }}
          >
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            {currentQuestion.question}
          </p>
          <div>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 15px",
                  marginBottom: "10px",
                  fontSize: "16px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  backgroundColor:
                    selectedAnswer === option
                      ? option === currentQuestion.answer
                        ? "rgba(76, 175, 80, 0.2)" // Green
                        : "rgba(244, 67, 54, 0.2)" // Red
                      : "white",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                disabled={selectedAnswer !== null} // Disable buttons after selection
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <p
              style={{
                marginTop: "20px",
                fontSize: "16px",
                fontWeight: "bold",
                color:
                  selectedAnswer === currentQuestion.answer
                    ? "green"
                    : "red",
              }}
            >
              {selectedAnswer === currentQuestion.answer
                ? "Correct!"
                : "Wrong answer."}
            </p>
          )}
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              style={{
                marginRight: "10px",
                padding: "10px 15px",
                border: "none",
                backgroundColor: "#1976d2",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                setSelectedAnswer(null); // Reset selected answer
                nextQuestion();
              }}
              disabled={currentQuestionIndex === questions.length - 1}
              style={{
                padding: "10px 15px",
                border: "none",
                backgroundColor: "#1976d2",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );  
};

export default App;
