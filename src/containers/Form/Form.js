// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Card from '../../components/shared/Card/Card';
import Form from '../../components/shared/form/Form/Form';

// @actions
import { getFormDataAction } from '../../store/actions/form/form';
import { getQuestionsAction } from '../../store/actions/quiz/quiz';

class FormContainer extends Component {
    componentDidMount() {
        const { getFormDataAction } = this.props;
        getFormDataAction();
    }

    handleOnSave = (values) => {
        const { getQuestionsAction } = this.props;
        getQuestionsAction(values);
    }

    render() {
        const { form: { error, isFetching, results } } = this.props;
        return (
            <Card
                error={error}
                isFetching={isFetching}
                title="Start"
            >
                <Form
                    form={results}
                    onSave={this.handleOnSave}
                />
            </Card>
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

FormContainer.propTypes = {
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
)(FormContainer);
