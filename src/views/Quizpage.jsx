import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MasterLayout from '../layouts/masterLayouts';

class Quizpage extends Component {

    render() {
        const { questions } = this.props;
        return (
            <MasterLayout toggleMode={this.props.toggleMode}>
                <Fragment>
                    <h1>Start Quiz</h1>
                    <p>Questions</p>
                    {questions && questions.length > 0 ? (
                        <div>
                            {questions.map((question, index) => (
                                <div key={index} style={{ marginBottom: '20px' }}>
                                    <h3>{question.question}</h3>
                                    <ul>
                                        {[...question.options].map((answer, answerIndex) => (
                                            <li key={answerIndex}>{answer}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading questions...</p>
                    )}

                </Fragment>
            </MasterLayout>
        );
    }

}

const mapStateToProps = state => {
    return {
        questions: state.quiz.questions
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Quizpage);