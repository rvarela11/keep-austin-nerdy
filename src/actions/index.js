export const GET_QUESTIONS_DATA = 'GET_QUESTIONS_DATA';
export function getQuestionsData(questions) {
    return {
        type: GET_QUESTIONS_DATA,
        payload: questions
    };
}

export const UPDATE_QUESTION_INFO = 'UPDATE_QUESTION_INFO';
export function updateQuestionInfo(isQuestionAnswered, isQuestionCorrect, questionId) {
    return {
        type: UPDATE_QUESTION_INFO,
        isQuestionAnswered,
        isQuestionCorrect,
        questionId
    };
}