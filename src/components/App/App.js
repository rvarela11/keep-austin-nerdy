// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Header from '../Header/Header';
import Form from '../shared/form/Form/Form';
import Page from '../shared/page/Page';

// @actions
import { getFormDataAction } from '../../store/actions/form/form';
import { getQuestionsAction } from '../../store/actions/quiz/quiz';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { getFormDataAction } = this.props;
        getFormDataAction();
    }

    handleOnSave = (values) => {
        const { getQuestionsAction } = this.props;
        getQuestionsAction(values);
    }

    render() {
        const {
            form: {
                error,
                isFetching,
                results
            }
        } = this.props;

        return (
            <div className="App">
                <Header />
                <Page error={error} isFetching={isFetching}>
                    <Form
                        form={results}
                        onSave={this.handleOnSave}
                    />
                </Page>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getFormDataAction: () => dispatch(getFormDataAction()),
    getQuestionsAction: values => dispatch(getQuestionsAction(values))
});

const mapStateToProps = state => ({
    form: state.form
});

App.propTypes = {
    form: PropTypes.shape({
        error: PropTypes.shape({}),
        isFetching: PropTypes.bool,
        results: PropTypes.array
    }).isRequired,
    getFormDataAction: PropTypes.func.isRequired,
    getQuestionsAction: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
