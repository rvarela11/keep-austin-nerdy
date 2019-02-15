export const GET_QUESTIONS_DATA = 'GET_QUESTIONS_DATA';
export function getQuestionsData(questions) {
    return {
        type: GET_QUESTIONS_DATA,
        payload: questions
    };
}
