// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// @material-ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// @actions
import { updateQuestionInfo } from '../../actions/index';

// @styles
import './QuizCard.scss';
import sassColors from '../../globals/scss/_colors.scss';

// Setting material-ui classes
const styles = theme => ({
    quiz_card: {
        width: '60%',
        height: '100vh',
        overflowY: 'scroll',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '95%'
        }
    },
    quiz_card_option__button: {
        justifyContent: 'flex-start',
        fontSize: '1.10rem',
        backgroundColor: sassColors.purple,
        color: sassColors.white,
        '&:hover': {
            background: sassColors.lightPurple
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1rem'
        }
    },
    quiz_card_option__button_correct: {
        backgroundColor: sassColors.lightGreen,
        '&:disabled': {
            color: sassColors.white
        }
    },
    quiz_card_option__button_incorrect: {
        backgroundColor: sassColors.lightRed
    },
    typography_media_query: {
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.25rem'
        }
    }
});

export class QuizCard extends Component {
    state = {
        indexOfCorrectAnswer: null
    };

    componentDidMount() {
        this.getIndexOfCorrectAnswer();
    }

    // Getting the index of the correct answer
    // This will set the green (correct) or red (incorrect) button colors after a user clicks an option
    getIndexOfCorrectAnswer = () => {
        const { item: { answer, options } } = this.props;
        options.forEach((option, index) => {
            if (option === answer) {
                this.setState({ indexOfCorrectAnswer: index });
            }
        });
    }

    render() {
        const {
            classes,
            isQuestionAnswered,
            item,
            updateQuestionInfo
        } = this.props;
        const { indexOfCorrectAnswer } = this.state;
        return (
            <Card className={classes.quiz_card}>
                <CardContent>
                    <Typography className={classes.typography_media_query} variant="h5">
                        {item.question}
                    </Typography>
                    <div className="quizCard__options">
                        { item.options.map((option, index) => (
                            <CardActions key={index}>
                                <Button
                                    /*eslint-disable */
                                    className={(isQuestionAnswered) ? (indexOfCorrectAnswer === index) ? `${classes.quiz_card_option__button_correct} ${classes.quiz_card_option__button}` : `${classes.quiz_card_option__button_incorrect} ${classes.quiz_card_option__button}` : classes.quiz_card_option__button}
                                    /* eslint-enable */
                                    color="primary"
                                    disabled={isQuestionAnswered}
                                    fullWidth
                                    onClick={() => updateQuestionInfo(true, (indexOfCorrectAnswer === index), item.id)}
                                    size="large"
                                >
                                    {option}
                                </Button>
                            </CardActions>
                        ))
                        }
                    </div>
                </CardContent>
            </Card>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateQuestionInfo: (isQuestionAnswered, isQuestionCorrect, questionId) => dispatch(updateQuestionInfo(isQuestionAnswered, isQuestionCorrect, questionId))
});

QuizCard.propTypes = {
    classes: PropTypes.object.isRequired,
    isQuestionAnswered: PropTypes.bool.isRequired,
    item: PropTypes.object.isRequired,
    updateQuestionInfo: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(QuizCard));
