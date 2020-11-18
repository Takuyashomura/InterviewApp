import _ from 'lodash';

//配列の中からランダムに返す
export const fetchQuestionData = ( array ) => {
    let questionData = _.sample( array )
    return questionData;
};