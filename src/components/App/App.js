// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Header from '../Header/Header';

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
        const { apiOneQuestion } = this.props;
        console.log({ apiOneQuestion })
        return (
            <div className="App">
                <Header />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    getQuestionsData: questions => dispatch(getQuestionsData(questions))
});

const mapStateToProps = state => ({
    apiOneQuestion: state.apiOneQuestion
});

App.propTypes = {
    apiOneQuestion: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

