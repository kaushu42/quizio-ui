import React from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const QuizCard = ({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  handleAnswer,
  handleNext,
  handlePrevious,
}) => {
  return (
    <motion.div
      key={currentQuestionIndex}
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: "relative" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#F5FBFF", // A light background color for contrast
          padding: "16px", // Ensure proper spacing
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "900px", // Set a maximum width for the card
            width: "100%", // Ensure the card adjusts to smaller screens
            height: "auto",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* Left Section - Question */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#E8F4FF", // Minimalistic blue background
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "32px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#5A77A6", fontWeight: "bold", marginBottom: "8px" }}
            >
              Step {currentQuestionIndex + 1}/{totalQuestions}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#2C3A5D", // Darker blue for the question
                fontWeight: "bold",
                marginBottom: "16px",
                lineHeight: 1.3,
              }}
            >
              {currentQuestion.question}
            </Typography>
            <Typography variant="body2" sx={{ color: "#7A7A7A" }}>
              Select one answer
            </Typography>
          </Box>

          {/* Right Section - Answers */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#FFFFFF", // White background
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "32px",
              boxSizing: "border-box",
            }}
          >
            <RadioGroup
              value={selectedAnswer}
              onChange={(e) => handleAnswer(e.target.value)}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100%",
              }}
            >
              {currentQuestion.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": { color: "#5E81D1" },
                      }}
                    />
                  }
                  label={option}
                  sx={{
                    background: selectedAnswer === option ? "#EAF4FF" : "#FFF",
                    border: "1px solid",
                    borderColor: selectedAnswer === option
                      ? "#5E81D1"
                      : "#E0E0E0",
                    borderRadius: "8px",
                    padding: "16px",
                    transition: "all 0.3s",
                    "&:hover": {
                      borderColor: "#5E81D1",
                    },
                    width: "100%",
                  }}
                />
              ))}
            </RadioGroup>

            {/* Navigation Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "32px",
                width: "100%",
              }}
            >
              <Button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                sx={{
                  color: "#5E81D1",
                  backgroundColor: "transparent",
                  border: "1px solid #5E81D1",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  "&:hover": {
                    backgroundColor: "#EAF4FF",
                  },
                }}
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedAnswer}
                sx={{
                  color: "#FFF",
                  backgroundColor: "#5E81D1",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  "&:hover": {
                    backgroundColor: "#3B5CA7",
                  },
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default QuizCard;
