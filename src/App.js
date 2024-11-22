import React, { useState, useEffect } from "react";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the questions from the localhost server
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000");
        if (!response.ok) {
          throw new Error(`Error fetching questions: ${response.statusText}`);
        }
        const data = await response.json();
        setQuestions(data.questions);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

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

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Quiz App</h1>
      {currentQuestion && (
        <div>
          <h2>
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {option}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              style={{ marginRight: "10px" }}
            >
              Previous
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
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
