import {combineReducers} from "redux";
import quizReducer from "./reducers/quizReducer";

const rootReducer = combineReducers({
    quiz: quizReducer
})

export default rootReducer;