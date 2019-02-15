export const GET_QUESTIONS_DATA = 'GET_QUESTIONS_DATA';
export const getQuestionsData = data => ({
    type: GET_QUESTIONS_DATA,
    payload: data
});

export const UPDATE_QUESTION_INFO = 'UPDATE_QUESTION_INFO';
export const updateQuestionInfo = (isQuestionAnswered, isQuestionCorrect, questionId) => ({
    type: UPDATE_QUESTION_INFO,
    isQuestionAnswered,
    isQuestionCorrect,
    questionId
});

export const UPDATE_PAST_QUESTIONS = 'UPDATE_PAST_QUESTIONS';
export const updatePastQuestions = () => ({
    type: UPDATE_PAST_QUESTIONS
});
