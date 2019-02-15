const initialState = {
    apiAllQuestions: [],
    apiOneQuestion: [],
    correctAnswers: 0,
    isQuestionAnswered: false,
    maxQuestions: 10,
    questionId: null,
    pastQuestions: [0]
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_QUESTIONS_DATA':
            const data = action.payload;
            // Creating a random number based on that max number
            const getRandomNumber = () => Math.ceil(Math.random() * (data.length));
            let randomNumber = getRandomNumber();

            // If randomNumber is found in the pastQuestions array set another number to randomNumber
            // To not show duplicate questions in our 10 question quiz
            while (state.pastQuestions.indexOf(randomNumber) !== -1) {
                randomNumber = getRandomNumber();
            }

            // Filter to get 1 random question from question.json
            const question = data.filter(({ id }) => id === randomNumber);
            return {
                ...state,
                apiAllQuestions: data,
                apiOneQuestion: question,
                isQuestionAnswered: false
            };
        case 'UPDATE_QUESTION_INFO':
            const { isQuestionAnswered, isQuestionCorrect, questionId } = action;
            const correctAnswers = isQuestionCorrect ? state.correctAnswers + 1 : state.correctAnswers;
            return {
                ...state,
                correctAnswers,
                isQuestionAnswered,
                questionId
            };
        case 'UPDATE_PAST_QUESTIONS':
            return {
                ...state,
                pastQuestions: state.pastQuestions.concat(state.questionId)
            };
        default:
            return state;
    }
}
