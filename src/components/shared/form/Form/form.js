// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import className from 'classnames';

// @material-ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
    const { form } = props;

    return (
        <Card className="card__form">
            <CardContent>
                <Formik
                    enableReinitialize
                    initialValues={generateValues(form)}
                    onSubmit={values => submitModelForm(values, props)}
                    validationSchema={validateSchema(form)}
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
                                            form={form[0]}
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
                                        disabled={!isValid}
                                        onClick={submitForm}
                                        size="small"
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
            </CardContent>
        </Card>
    );
};

form.propTypes = {
    form: PropTypes.array.isRequired
};

export default form;
