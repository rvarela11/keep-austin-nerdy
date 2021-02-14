// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

// @utiles
import { generateValues } from '../../../utiles/helpers';

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
                console.log({ values });
                return (
                    <Form>
                        <div>Howdy</div>
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
