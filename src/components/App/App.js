// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

// @actions
import { getQuestionsData } from '../../actions/index';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { getQuestionsData } = this.props;
        fetch('questions.json')
            .then(res => res.json())
            .then(data => getQuestionsData(data))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Quiz />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getQuestionsData: questions => dispatch(getQuestionsData(questions))
});

App.propTypes = {
    getQuestionsData: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(App);
