import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MasterLayout from '../layouts/masterLayouts';
import QuizCard from '../components/QuizCard';
import { Typography, Box, Button } from '@mui/material';

class Quizpage extends Component {
  state = {
    selectedOption: null,
    score: 0,
    currentQuestionIndex: 0,
    quizFinished: false,
    showAnswerFeedback: false,
    isAnswerCorrect: false,
    nextQuestionDelay: false,
  };

  handleOptionClick = (selectedOption) => {
    if (this.state.nextQuestionDelay) return; // Disable option clicks during next question delay

    this.setState({
      selectedOption,
    });
  };

  handleNextQuestion = () => {
    const { selectedOption, currentQuestionIndex } = this.state;
    const currentQuestion = this.props.questions[currentQuestionIndex];

    if (!selectedOption) return; // Do nothing if no option is selected

    const isAnswerCorrect = selectedOption === currentQuestion.answer;

    this.setState(
      {
        isAnswerCorrect,
        showAnswerFeedback: true,
        score: isAnswerCorrect ? this.state.score + 1 : this.state.score,
        nextQuestionDelay: true,
      },
      () => {
        setTimeout(() => {
          const nextQuestionIndex = currentQuestionIndex + 1;
          if (nextQuestionIndex < this.props.questions.length) {
            this.setState({
              selectedOption: null,
              showAnswerFeedback: false,
              isAnswerCorrect: false,
              currentQuestionIndex: nextQuestionIndex,
              nextQuestionDelay: false,
            });
          } else {
            this.handleFinishQuiz();
          }
        }, 2000); // Wait for 2 seconds before proceeding to the next question
      }
    );
  };

  handleFinishQuiz = () => {
    this.setState({ quizFinished: true });
  };

  render() {
    const { questions } = this.props;
    const {
      selectedOption,
      score,
      currentQuestionIndex,
      quizFinished,
      showAnswerFeedback,
      isAnswerCorrect,
      nextQuestionDelay,
    } = this.state;

    // Show score after the quiz is finished
    if (quizFinished) {
      return (
        <MasterLayout toggleMode={this.props.toggleMode}>
          <Fragment>
            <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
              <Typography variant="h2" color="primary">
                Your Score:
              </Typography>
              <Typography variant="h1" color="primary" sx={{ fontWeight: 'bold', fontSize: '5rem' }}>
                {score} / {questions.length}
              </Typography>

              {/* Return to Home button */}
              <Link to="/">
                <Button variant="contained" sx={{ marginTop: '20px', fontSize: '1.2rem' }}>
                  Return to Home
                </Button>
              </Link>
            </Box>
          </Fragment>
        </MasterLayout>
      );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
      <MasterLayout toggleMode={this.props.toggleMode}>
        <Fragment>
          <h1>Start Quiz</h1>
          <p>Questions</p>
          {questions && questions.length > 0 ? (
            <QuizCard
              question={currentQuestion}
              selectedOption={selectedOption}
              showAnswerFeedback={showAnswerFeedback}
              isAnswerCorrect={isAnswerCorrect}
              onOptionClick={this.handleOptionClick}
              onNextQuestion={this.handleNextQuestion}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              nextQuestionDelay={nextQuestionDelay}
            />
          ) : (
            <p>Loading questions...</p>
          )}
        </Fragment>
      </MasterLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.quiz.questions,
  };
};

export default connect(mapStateToProps)(Quizpage);
