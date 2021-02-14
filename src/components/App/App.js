// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Header from '../Header/Header';
import Form from '../shared/form/Form/Form';
// import Quiz from '../Quiz/Quiz';

// @actions
import { getFormData } from '../../store/actions/form/form';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { getFormData } = this.props;
        getFormData();
    }

    render() {
        const { form } = this.props;
        return (
            <div className="App">
                <Header />
                <Form form={form} />
                {/* <Quiz /> */}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getFormData: () => dispatch(getFormData())
});

const mapStateToProps = state => ({
    form: state.form.form
});

App.propTypes = {
    form: PropTypes.array.isRequired,
    getFormData: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
