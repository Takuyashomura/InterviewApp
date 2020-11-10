import { combineReducers } from 'redux';
import interviewTypeReducer from './interviewType/interviewType_reducer';
import currentQuestionReducer from './currentQuestion/currentQuestion_reducer';

const rootReducer = combineReducers({
    selectType: interviewTypeReducer,
    QuestionData: currentQuestionReducer
});

export default rootReducer;