
const initialState = {
    questions : [],
    topic: 'science'
}


const quizReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_QUIZ_TOPIC':
            return {
                ...state,
                topic: action.payload
            }
        case 'FETCH_QUESTIONS':
            return {
                ...state,
                questions: action.payload
            }
        default:
            return state;
    }
}

export default quizReducer;