// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import TextField from '@material-ui/core/TextField';

const FormFields = (props) => {
    const {
        // Component props
        attr,
        form,
        onChange,
        value,
        // Formik props
        setFieldTouched
    } = props;
    const {
        dataType,
        isRequired,
        label,
        readOnly
    } = form[attr];

    const handleChange = (event) => {
        setFieldTouched(attr);
        onChange(event);
    };

    const handleBlur = () => {
        setFieldTouched(attr);
    };

    return (
        <div>
            <TextField
                name={attr}
                label={label}
                disabled={readOnly}
                onBlur={handleBlur}
                onChange={handleChange}
                required={isRequired}
                type={dataType}
                value={value}
            />
        </div>
    );
};

FormFields.propTypes = {
    attr: PropTypes.string.isRequired,
    form: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired
};

export default FormFields;
