import axios from 'axios';

// Function to fetch quiz questions
export const fetchQuizQuestions = (topic) => {
    return axios.get(`https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple`);
}