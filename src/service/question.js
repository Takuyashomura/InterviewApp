import _ from 'lodash';

//配列の中からランダムに返す
export const shuffleArray = ( array ) => {
    let questionData = _.shuffle( array )
    return questionData;
};