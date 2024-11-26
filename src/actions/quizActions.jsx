import { UPDATE_QUIZ_TOPIC, FETCH_QUESTIONS } from "../actionTypes/quizActionTypes";
import { fetchQuizQuestions } from "../services/quizService";

export function updateQuizTopic(topic) {
    return {
        type: UPDATE_QUIZ_TOPIC,
        payload: topic
    }
}

export function fetchQuestions(topic) {
    return (dispatch) => {
        fetchQuizQuestions(topic)
            .then(response => {
                dispatch({
                    type: FETCH_QUESTIONS,
                    payload: response.data.results
                })
            })
            .catch(error => {
                console.error("Error fetching questions:", error);
            });
    }
}