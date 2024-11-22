// src/components/QuizCard.js
import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemButton, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

const QuizCard = ({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  handleAnswer,
}) => {
  return (
    <motion.div
      key={currentQuestionIndex}
      initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right
      animate={{ x: 0, opacity: 1 }} // Animate to center
      exit={{ x: "-100%", opacity: 0 }} // Swipe out to the left
      transition={{ duration: 0.5 }}
      style={{
        position: "absolute", // Position each card absolutely to stack them
        top: 0,
        left: 0,
        right: 0,
        zIndex: totalQuestions - currentQuestionIndex, // Make sure the current card is on top
        transform: `translateY(${currentQuestionIndex * 20}px)`, // Create slight overlap effect
      }}
    >
      <Card
        sx={{
          marginTop: 4,
          padding: 3,
          background: "linear-gradient(145deg, #A7C7E7, #5E81D1)",
          borderRadius: "20px",
          boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.3)",
          textAlign: "center",
          zIndex: 2, // Ensure the card appears on top of other content
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: "#fff", fontWeight: "bold" }}>
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff", marginBottom: "20px" }}>
            {currentQuestion.question}
          </Typography>

          <List>
            {currentQuestion.options.map((option, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  backgroundColor:
                    selectedAnswer === option
                      ? option === currentQuestion.answer
                        ? "rgba(76, 175, 80, 0.2)" // Green for correct answer
                        : "rgba(244, 67, 54, 0.2)" // Red for wrong answer
                      : "transparent",
                  borderRadius: "12px",
                  marginBottom: "8px",
                  transition: "background-color 0.3s ease",
                }}
              >
                <ListItemButton
                  onClick={() => handleAnswer(option)}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#E3E3E3",
                    },
                  }}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {selectedAnswer && (
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
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
            </Typography>
          )}
        </CardContent>

        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="outlined"
            sx={{
              marginRight: 1,
              color: "#fff",
              borderColor: "#fff",
              "&:hover": {
                backgroundColor: "#6D9AEE",
                borderColor: "#6D9AEE",
              },
            }}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#FFBF00",
              },
            }}
            disabled
          >
            Next
          </Button>
        </Box>
      </Card>
    </motion.div>
  );
};

export default QuizCard;
