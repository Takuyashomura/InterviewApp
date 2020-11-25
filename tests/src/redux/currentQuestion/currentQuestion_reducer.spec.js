import currentQuestionReducer from '../../../../src/redux/currentQuestion/currentQuestion_reducer';
import { FETCH_QUESTION_DATA, CURRENT_QUESTION, QUESTION_NUMBER, QUESTION_NUMBER_DECREMENT, RESET_QUESTION, ADD_NOT_GOOD_QUESTION } from '../../../../src/redux/currentQuestion/currentQuestion_action';

describe('currentQuestionReducerのテスト', () => {
    it('action.type === FETCH_QUESTION_DATA', () => {
        const dummyData = "a";

        const action = {
            type: FETCH_QUESTION_DATA,
            payload: dummyData
        };

        const currentState = {
            questions: [],
            currentQuestion: "",
            notGoodQuestion: [],
            questionNumber: 0
        };

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions: ["a"],
            currentQuestion: "",
            notGoodQuestion: [],
            questionNumber: 0
        });
    });

    it('action.type === CURRENT_QUESTIONの時', () => {
        const dummyData = "a";

        const action = {
            type: CURRENT_QUESTION,
            payload: dummyData
        };

        const currentState = {
            questions: [],
            currentQuestion: "",
            notGoodQuestion: [],
            questionNumber: 0
        };

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions: [],
            currentQuestion: "a",
            notGoodQuestion: [],
            questionNumber: 0
        });
    });

    it('action.type === QUESTION_NUMBERの時', () => {
        const dummyData = 5;

        const action = {
            type: QUESTION_NUMBER,
            payload: dummyData
        };

        const currentState = {
            questions: [],
            currentQuestion: "",
            notGoodQuestion: [],
            questionNumber: 0
        };

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions: [],
            currentQuestion: "",
            notGoodQuestion: [],
            questionNumber: 4
        });
    });

    it('action.type === QUESTION_NUMBER_DECREMENTの時', () => {
        const action = {
            type: QUESTION_NUMBER_DECREMENT
        }

        const currentState = {
            questions: [],
            currentQuestion: "",
            notGoodQuestion: [],
            questionNumber: 1
        }

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions: [],
            currentQuestion: "",
            notGoodQuestion: [],
            questionNumber: 0
        });
    });

    it('action.type === RESET_QUESTIONの時', () => {
        const action = {
            type: RESET_QUESTION
        }

        const currentState = {
            questions: ["a","b,","c"],
            currentQuestion: "",
            notGoodQuestion: [],
            questionNumber:0
        }

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions: [],
            currentQuestion: "",
            notGoodQuestion: [],
            questionNumber: 0
        })
    });

    it('action.type === ADD_NOT_GOOD_QUESTIONの時', () => {
        const dummyData = "a";

        const action = {
            type: ADD_NOT_GOOD_QUESTION,
            payload: dummyData
        };

        const currentState = {
            questions:[],
            currentQuestion: "",
            notGoodQuestion: [],
            questionNumber: 0
        };

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions:[],
            currentQuestion: "",
            notGoodQuestion:["a"],
            questionNumber: -1
        });
    });
})