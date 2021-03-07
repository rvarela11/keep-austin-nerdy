/* eslint-disable camelcase */
export const generateResults = (number) => {
    const results = [];

    for (let i = 0; i < number; i += 1) {
        results.push({
            correct_answer: `D${i}`,
            incorrect_answers: [`A${i}`, `B${i}`, `C${i}`],
            question: 'Which is the correct answer?'
        });
    }

    return results;
};

export const trivia_categories = [{
    id: 9,
    name: 'General Knowledge'
}];

export const questions = [
    {
        category: 'Entertainment: Books',
        correct_answer: 'J.K. Rowling',
        difficulty: 'easy',
        incorrect_answers: ['J.R.R. Tolkien', 'Terry Pratchett', 'Daniel Radcliffe'],
        question: 'Who wrote &quot;Harry Potter&quot;?',
        type: 'multiple'
    },
    {
        category: 'Entertainment: Books',
        correct_answer: 'J.K. Rowling',
        difficulty: 'easy',
        incorrect_answers: ['J.R.R. Tolkien', 'Terry Pratchett', 'Daniel Radcliffe'],
        question: 'Who wrote &quot;Harry Potter&quot;?',
        type: 'multiple'
    }
];
