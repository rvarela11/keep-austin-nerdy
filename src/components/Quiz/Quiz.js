// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Scoreboard from '../Scoreboard/Scoreboard';
import QuizCard from '../QuizCard/QuizCard';
import NextButton from '../NextButton/NextButton';

// @styles
import './Quiz.scss';

const Quiz = (props) => {
    const { questionInfo } = props;
    return (
        <div className="quiz">
            <Scoreboard />
            {
                questionInfo.map(item => (
                    <QuizCard
                        key={item.id}
                        item={item}
                        isQuestionAnswered={false}
                    />
                ))
            }
            <NextButton />
        </div>
    );
};

const mapStateToProps = state => ({
    questionInfo: state.apiOneQuestion
});

Quiz.propTypes = {
    questionInfo: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Quiz);
