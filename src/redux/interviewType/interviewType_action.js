export const SELECT_INTERVIEW_TYPE = "SELECT_INTERVIEW_TYPE";
export const SELECT_INTERVIEW_INDEX = "SELECT_INTERVIEW_INDEX";

export const selectInterviewType = payload => ({
    type: SELECT_INTERVIEW_TYPE,
    payload
});

export const selectInterviewIndex = payload => ({
    type: SELECT_INTERVIEW_INDEX,
    payload
});