// @vendors
import React from 'react';
import { Formik, Form } from 'formik';

// @utiles
import { generateValues } from '../../../utiles/helpers';

const CreateQuizForm = () => (
    <Formik
        enableReinitialize
        initialValues={generateValues()}
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
            return (
                <Form>
                    <div>Howdy</div>
                </Form>
            );
        }}
    </Formik>
);

export default CreateQuizForm;
