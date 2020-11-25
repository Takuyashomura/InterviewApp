export const FETCH_QUESTION_DATA = "FETCH_QUESTION_DATA";
export const CURRENT_QUESTION = "CURRENT_QUESTION";
export const QUESTION_NUMBER = "QUESTION_NUMBER";
export const QUESTION_NUMBER_DECREMENT = "QUESTION_NUMBER_DECREMENT";
export const RESET_QUESTION = "RESET_QUESTION";
export const ADD_NOT_GOOD_QUESTION = "ADD_NOT_GOOD_QUESTION";
export const RESET_NOT_GOOD_QUESTION = "RESET_NOT_GOOD_QUESTION";

export const fetchQuestionData = payload => ({
    type: FETCH_QUESTION_DATA,
    payload
});

export const currentQuestion = payload => ({
    type: CURRENT_QUESTION,
    payload
});

export const questionNumber = payload => ({
    type: QUESTION_NUMBER,
    payload
});

export const questionNumberDecrement = () => ({
    type: QUESTION_NUMBER_DECREMENT
});

export const resetQuestion = () => ({
    type: RESET_QUESTION
});

export const addNotGoodQuestion = payload => ({
    type: ADD_NOT_GOOD_QUESTION,
    payload
});

export const resetNotGoodQuestion = () => ({
    type: RESET_NOT_GOOD_QUESTION
})