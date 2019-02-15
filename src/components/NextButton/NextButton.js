// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// @material-ui
import Button from '@material-ui/core/Button';

// @actions
import { getQuestionsAPI } from '../../actions/api';
import { updatePastQuestions } from '../../actions/index';

// Setting material-ui classes
const styles = {
    button: {
        marginTop: '10px',
        marginBottom: '10px'
    }
};

const NextButton = (props) => {
    const {
        classes,
        getQuestionsAPI,
        isQuestionAnswered,
        maxQuestions,
        pastQuestionsLength,
        updatePastQuestions
    } = props;
    // This boolean will set the buttonLabel and the color of the button
    const isLastQuestion = (pastQuestionsLength === maxQuestions);
    const buttonLabel = (isLastQuestion) ? 'Finish' : 'Next';
    return (
        <Button
            className={classes.button}
            color={isLastQuestion ? 'secondary' : 'primary'}
            disabled={!isQuestionAnswered}
            onClick={() => {
                getQuestionsAPI();
                updatePastQuestions();
            }}
            size="large"
            variant="contained"
        >
            {buttonLabel}
        </Button>
    );
};

const mapDispatchToProps = dispatch => ({
    getQuestionsAPI: () => dispatch(getQuestionsAPI()),
    updatePastQuestions: () => dispatch(updatePastQuestions())
});

const mapStateToProps = state => ({
    isQuestionAnswered: state.isQuestionAnswered,
    maxQuestions: state.maxQuestions,
    pastQuestionsLength: state.pastQuestions.length
});

NextButton.propTypes = {
    classes: PropTypes.object.isRequired,
    getQuestionsAPI: PropTypes.func.isRequired,
    isQuestionAnswered: PropTypes.bool.isRequired,
    maxQuestions: PropTypes.number.isRequired,
    pastQuestionsLength: PropTypes.number.isRequired,
    updatePastQuestions: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NextButton));
