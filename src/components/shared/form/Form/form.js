// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import className from 'classnames';

// @material-ui
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

// @components
import FormFields from '../FormFields/FormFields';

// @utiles
import {
    generateValues,
    submitModelForm,
    validateSchema
} from '../../../../utiles/helpers';

// @styles
import './Form.scss';

const form = (props) => {
    const { results } = props;

    return (
        <Formik
            enableReinitialize
            initialValues={generateValues(results)}
            onSubmit={values => submitModelForm(values, props)}
            validationSchema={validateSchema(results)}
        >
            {({
                dirty,
                errors,
                handleBlur,
                handleChange,
                handleReset,
                isSubmitting,
                isValid,
                setFieldTouched,
                setFieldValue,
                setStatus,
                status,
                submitForm,
                touched,
                values
            }) => {
                const areButtonsVisible = Object.keys(touched).length > 0 && dirty;

                return (
                    <Form className="form">
                        {
                            Object.keys(values).map((attr, index) => (
                                <FormFields
                                    key={index}
                                    attr={attr}
                                    error={(touched[attr] && errors[attr]) && !isValid}
                                    form={results[0]}
                                    onChange={handleChange}
                                    setFieldTouched={setFieldTouched}
                                    value={values[attr]}
                                />
                            ))
                        }
                        <CardActions
                            className={className(
                                'card-actions',
                                { 'card-actions--hide': !areButtonsVisible }
                            )}
                        >
                            <Button
                                color="primary"
                                disabled={!isValid}
                                onClick={submitForm}
                                size="small"
                                variant="contained"
                            >
                                Save
                            </Button>
                            <Button
                                onClick={() => handleReset()}
                                size="small"
                            >
                                Reset
                            </Button>
                        </CardActions>
                    </Form>
                );
            }}
        </Formik>
    );
};

form.propTypes = {
    results: PropTypes.array.isRequired
};

export default form;
