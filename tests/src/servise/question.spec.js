import { fetchQuestionData } from '../../../src/service/question';
import { normalQuestion } from '../../../src/Array/questionArray';

describe('question関数のテスト', () => {
    it('fetchQuestionDataメソッドのテスト', () => {
        const questionData1 = fetchQuestionData( normalQuestion );

        const questionData2 = fetchQuestionData( normalQuestion );

        expect( questionData1 ).not.toStrictEqual( questionData2 );
    });

    
});