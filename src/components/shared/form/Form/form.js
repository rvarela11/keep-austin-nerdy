// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

// @components
import FormFields from '../FormFields/FormFields';

// @utiles
import { generateValues } from '../../../../utiles/helpers';

const form = (props) => {
    const { form } = props;
    return (
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
                console.log({ dirty, values });
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
                                />
                            ))
                        }
                    </Form>
                );
            }}
        </Formik>
    );
};

form.propTypes = {
    form: PropTypes.array.isRequired
};

export default form;
