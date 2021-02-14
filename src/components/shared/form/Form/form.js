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
import { generateValues } from '../../../../utiles/helpers';

// @styles
import './Form.scss';

const form = (props) => {
    const { form } = props;
    return (
        <Card>
            <CardContent>
                <Formik
                    enableReinitialize
                    initialValues={generateValues(form)}
                    // onSubmit={values => submitModelForm(values, props)}
                    // onReset={() => setResetForm(true)}
                    // validationSchema={validateSchema(props)}
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
                        const areButtonVisible = Object.keys(touched).length > 0 && dirty;
                        console.log({
                            form, dirty, areButtonVisible, values
                        });
                        return (
                            <Form>
                                {
                                    Object.keys(values).map((attr, index) => (
                                        <FormFields
                                            key={index}
                                            attr={attr}
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
                                        { 'card-actions--hide': !areButtonVisible }
                                    )}
                                >
                                    <Button
                                        onClick={() => console.log('SAVE')}
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
