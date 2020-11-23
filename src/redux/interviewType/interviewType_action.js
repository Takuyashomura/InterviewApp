export const SELECT_INTERVIEW_TYPE = "SELECT_INTERVIEW_TYPE";
export const SELECT_INTERVIEW_INDEX = "SELECT_INTERVIEW_INDEX";
export const RESET_INDEX = "RESET_INDEX";

export const selectInterviewType = payload => ({
    type: SELECT_INTERVIEW_TYPE,
    payload
});

export const selectInterviewIndex = payload => ({
    type: SELECT_INTERVIEW_INDEX,
    payload
});

export const resetIndex = payload => ({
    type:RESET_INDEX,
    payload
});