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
