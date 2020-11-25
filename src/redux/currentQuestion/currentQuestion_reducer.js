import { FETCH_QUESTION_DATA ,
        CURRENT_QUESTION, 
        QUESTION_NUMBER, 
        QUESTION_NUMBER_DECREMENT, 
        RESET_QUESTION,
        ADD_NOT_GOOD_QUESTION,
        RESET_NOT_GOOD_QUESTION } from './currentQuestion_action';

const init = {
    questions: [],
    currentQuestion: "",
    notGoodQuestion:[],
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

        case ADD_NOT_GOOD_QUESTION:
            return {
                ...state,
                notGoodQuestion: [ ...state.notGoodQuestion, payload ],
                questionNumber: state.questionNumber -1
            }

        case RESET_NOT_GOOD_QUESTION:
            return {
                ...state,
                notGoodQuestion: []
            }

        default:
            return state
    }
}

export default currentQuestionReducer;