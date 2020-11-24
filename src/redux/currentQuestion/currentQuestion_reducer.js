import { FETCH_QUESTION_DATA ,CURRENT_QUESTION, QUESTION_NUMBER, QUESTION_NUMBER_DECREMENT, RESET_QUESTION } from './currentQuestion_action';

const init = {
    questions: [],
    currentQuestion: "",
    questionNumber: 0
};

const currentQuestionReducer = ( state = init, action ) => {
    const { type, payload } = action;
    switch( type ) {
        case FETCH_QUESTION_DATA:
            return {
                ...state,
                questions: [ ...state.questions, payload  ]
            };

        case CURRENT_QUESTION:
            return {
                ...state,
                currentQuestion: payload
            };
        
        case QUESTION_NUMBER:
            return {
                ...state,
                questionNumber: payload -1
            };

        case QUESTION_NUMBER_DECREMENT:
            return {
                ...state,
                questionNumber: state.questionNumber -1
            };

        case RESET_QUESTION:
            return {
                ...state,
                questions:[]
            };

        default:
            return state
    }
}

export default currentQuestionReducer;