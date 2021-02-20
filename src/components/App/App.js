// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Header from '../Header/Header';
import Form from '../shared/form/Form/Form';
import Page from '../shared/page/Page';

// @actions
import { getFormData, getQuestions } from '../../store/actions/form/form';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { getFormData } = this.props;
        getFormData();
    }

    handleOnSave = (values) => {
        const { getQuestions } = this.props;
        getQuestions(values);
    }

    render() {
        const { form } = this.props;
        return (
            <div className="App">
                <Header />
                <Page>
                    <Form
                        form={form}
                        onSave={this.handleOnSave}
                    />
                </Page>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getFormData: () => dispatch(getFormData()),
    getQuestions: values => dispatch(getQuestions(values))
});

const mapStateToProps = state => ({
    form: state.form.form
});

App.propTypes = {
    form: PropTypes.array.isRequired,
    getFormData: PropTypes.func.isRequired,
    getQuestions: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
