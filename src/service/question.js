import _ from 'lodash';
import { fetchQuestionData } from '../redux/currentQuestion/currentQuestion_action';
import { normalQuestion } from '../Array/questionArray';

//配列の中からランダムに返す
export const shuffleArray = ( array ) => {
    let questionData = _.shuffle( array )
    return questionData;
};

export const addShuffleQuestionData = ( num ) => dispatch => {
    const array = shuffleArray( normalQuestion );
    const index = num ++;

    for(let i = 0; i < index; i ++){

        const question = array[i];
        dispatch(fetchQuestionData( question ));
    }
}