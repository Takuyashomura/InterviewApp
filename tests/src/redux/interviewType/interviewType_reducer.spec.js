import interviewTypeReducer from '../../../../src/redux/interviewType/interviewType_reducer';
import { SELECT_INTERVIEW_TYPE, SELECT_INTERVIEW_INDEX } from '../../../../src/redux/interviewType/interviewType_action';

describe('interviewTypeReducerのテスト', () => {
    it('action.type === SELECT_INTERVIEW_TYPEの時', () => {
        const dummyData = "normal";

        const action = {
            type: SELECT_INTERVIEW_TYPE,
            payload: dummyData
        };

        const currentState = {
            select: "",
            index: 0
        }

        const newState = interviewTypeReducer(currentState, action );

        expect( newState ).toStrictEqual({
            select: "normal",
            index: 0
        });

    })

    it('action.type === SELECT_INTERVIEW_INDEXの時', () => {
        const dummyData = 1;

        const action = {
            type: SELECT_INTERVIEW_INDEX,
            payload: dummyData
        };

        const currentState = {
            select: "",
            index: dummyData
        };

        const newState = interviewTypeReducer( currentState, action );

        expect( newState ).toStrictEqual({
            select: "",
            index: 1
        });
    })
})