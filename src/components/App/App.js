// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

// @components
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

// @actions
import { getQuestionsAPI } from '../../actions/api';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { getQuestionsAPI } = this.props;
        getQuestionsAPI();
    }

    render() {
        const { questionInfo } = this.props;
        // Display CircularProgress if app is loading
        if (!Array.isArray(questionInfo) || !questionInfo.length) {
            return (
                <CircularProgress />
            );
        }
        return (
            <div className="App">
                <Header />
                <Quiz />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getQuestionsAPI: () => dispatch(getQuestionsAPI())
});

const mapStateToProps = state => ({
    questionInfo: state.apiOneQuestion
});

App.propTypes = {
    getQuestionsAPI: PropTypes.func.isRequired,
    questionInfo: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
