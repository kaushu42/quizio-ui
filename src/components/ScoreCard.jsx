// src/components/ScoreCard.js
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const ScoreCard = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          marginTop: 5,
          padding: 4,
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Quiz Completed!
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            Final Score: {score}/{totalQuestions}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={restartQuiz}
            sx={{ marginTop: 3 }}
          >
            Restart Quiz
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ScoreCard;
