// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

App.propTypes = {
    getQuestionsAPI: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(App);
