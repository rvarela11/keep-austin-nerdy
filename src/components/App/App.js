// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Header from '../Header/Header';
import CreateQuizForm from '../shared/form/CreateQuizForm';
// import Quiz from '../Quiz/Quiz';

// @actions
import { getFormQuestions } from '../../store/actions/form/form';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { getFormQuestions } = this.props;
        getFormQuestions();
    }

    render() {
        const { form } = this.props;
        console.log({ form });
        return (
            <div className="App">
                <Header />
                <CreateQuizForm />
                {/* <Quiz /> */}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getFormQuestions: () => dispatch(getFormQuestions())
});

const mapStateToProps = state => ({
    form: state.form
});

App.propTypes = {
    getFormQuestions: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
