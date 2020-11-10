import { FETCH_QUESTION_DATA ,CURRENT_QUESTION, QUESTION_NUMBER, QUESTION_NUMBER_DECREMENT } from './currentQuestion_action';

const init = {
    questionData: [],
    currentQuestion: "",
    questionNumber: 0
};

const currentQuestionReducer = ( state = init, action ) => {
    const { type, payload } = action;
    switch( type ) {
        case FETCH_QUESTION_DATA:
            return {
                ...state,
                questionData: payload
            };

        case CURRENT_QUESTION:
            return {
                ...state,
                currentQuestion: payload
            };
        
        case QUESTION_NUMBER:
            return {
                ...state,
                questionNumber: payload
            };

        case QUESTION_NUMBER_DECREMENT:
            return {
                ...state,
                questionNumber: state.questionNumber -1
            };

        default:
            return state
    }
}

export default currentQuestionReducer;