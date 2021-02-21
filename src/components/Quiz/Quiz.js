// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

// @material-ui
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

// @components
// import Scoreboard from '../Scoreboard/Scoreboard';
import Question from '../Question/Question';
// import QuizCard from '../QuizCard/QuizCard';
// import NextButton from '../NextButton/NextButton';
// import Results from '../Results/Results';

// @styles
import './Quiz.scss';

export const Quiz = (props) => {
    const { current, results } = props;
    const isButtonVisible = true;

    return (
        <div className="quiz">
            {/* <Scoreboard
                correctAnswers={correctAnswers}
                maxQuestions={maxQuestions}
                pastQuestionsLength={pastQuestionsLength}
            /> */}
            {/* {(pastQuestionsLength <= maxQuestions)
                ? questionInfo.map(item => (
                    <QuizCard
                        key={item.id}
                        item={item}
                        isQuestionAnswered={isQuestionAnswered}
                    />
                ))
                : <Results correctAnswers={correctAnswers} />
            }
            {(pastQuestionsLength <= maxQuestions)
                ? (
                    <NextButton
                        isQuestionAnswered={isQuestionAnswered}
                        maxQuestions={maxQuestions}
                        pastQuestionsLength={pastQuestionsLength}
                    />
                )
                : null
            } */}
            {/* <Scoreboard results={results} /> */}
            <Question item={results[current]} />
            <CardActions
                className={className(
                    'card-actions',
                    { 'card-actions--hide': !isButtonVisible }
                )}
            >
                <Button
                    color="primary"
                    // disabled={!isValid}
                    onClick={() => console.log('Next')}
                    size="small"
                    variant="contained"
                >
                    Next
                </Button>
            </CardActions>
        </div>
    );
};

Quiz.propTypes = {
    current: PropTypes.number.isRequired,
    results: PropTypes.array.isRequired
};

export default Quiz;
