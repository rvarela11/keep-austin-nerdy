const initialState = {
    apiOneQuestion: []
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
            while ([0].indexOf(randomNumber) !== -1) {
                randomNumber = getRandomNumber();
            }

            // Filter to get 1 random question from question.json
            const question = data.filter(({ id }) => id === randomNumber);

            return {
                ...state,
                apiOneQuestion: question
            };
        default:
            return state;
    }
}
