import currentQuestionReducer from '../../../../src/redux/currentQuestion/currentQuestion_reducer';
import { FETCH_QUESTION_DATA, CURRENT_QUESTION, QUESTION_NUMBER, QUESTION_NUMBER_DECREMENT, RESET_QUESTION } from '../../../../src/redux/currentQuestion/currentQuestion_action';

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
            questionNumber: 0
        };

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions: ["a"],
            currentQuestion: "",
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
            questionNumber: 0
        };

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions: [],
            currentQuestion: "a",
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
            questionNumber: 0
        };

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions: [],
            currentQuestion: "",
            questionNumber: 5
        });
    });

    it('action.type === QUESTION_NUMBER_DECREMENTの時', () => {
        const action = {
            type: QUESTION_NUMBER_DECREMENT
        }

        const currentState = {
            questions: [],
            currentQuestion: "",
            questionNumber: 1
        }

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions: [],
            currentQuestion: "",
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
            questionNumber:0
        }

        const newState = currentQuestionReducer( currentState, action );

        expect( newState ).toStrictEqual({
            questions: [],
            currentQuestion: "",
            questionNumber: 0
        })
    })
})