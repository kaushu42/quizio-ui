import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { updateQuizTopic, fetchQuestions } from '../actions/quizActions';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import MasterLayout from '../layouts/masterLayouts';

class Homepage extends Component {
    state = {
        redirectToQuiz: false,
    };

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.dispatchUpdateQuizTopic(e.target.value);
            this.props.dispatchFetchQuestions(this.props.topic);
            this.setState({ redirectToQuiz: true });
        }
    };

    handleInputChange = (e) => {
        this.props.dispatchUpdateQuizTopic(e.target.value);
    };

    render() {
        if (this.state.redirectToQuiz) {
            // Redirect to Quiz Page
            return <Navigate to="/quiz" />;
        }

        return (
            <MasterLayout toggleMode={this.props.toggleMode}>
                <Container maxWidth="sm">
                    <Box mt={5}>
                        <Typography variant="h3" gutterBottom>
                            Welcome to the Quiz App
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Enter the topic you'd like to be quizzed on:
                        </Typography>
                        <TextField
                            label="Topic"
                            variant="outlined"
                            fullWidth
                            value={this.props.topic}
                            onChange={this.handleInputChange}
                            onKeyDown={this.handleKeyDown}
                            sx={{ mb: 2 }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => {
                                this.props.dispatchUpdateQuizTopic(this.props.topic);
                                this.props.dispatchFetchQuestions(this.props.topic);
                                this.setState({ redirectToQuiz: true });
                            }}
                        >
                            Start Quiz
                        </Button>
                    </Box>
                </Container>
            </MasterLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topic: state.quiz.topic,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateQuizTopic: (topic) => dispatch(updateQuizTopic(topic)),
        dispatchFetchQuestions: (topic) => dispatch(fetchQuestions(topic)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
