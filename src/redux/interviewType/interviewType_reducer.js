import { SELECT_INTERVIEW_TYPE, SELECT_INTERVIEW_INDEX } from './interviewType_action';

const init = {
    select: '',
    index: 1
};

const interviewTypeReducer = ( state = init, action ) => {
    const { type, payload } = action;
    switch( type ){
        case SELECT_INTERVIEW_TYPE:
            return{
                ...state,
                select: payload
            };

        case SELECT_INTERVIEW_INDEX:
            return{
                ...state,
                index: payload
            }

        default:
            return state
    }
}

export default interviewTypeReducer;