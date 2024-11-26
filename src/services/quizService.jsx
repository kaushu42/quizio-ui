import axios from 'axios';
import { ROOT_URL } from '../utils';

// Function to fetch quiz questions
export const fetchQuizQuestions = (topic) => {
    const FETCH_URL = `${ROOT_URL}/questions?type=${topic}`;
    return axios.get(FETCH_URL);
}