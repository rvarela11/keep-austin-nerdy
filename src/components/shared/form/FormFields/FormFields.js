// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import TextField from '@material-ui/core/TextField';

// @utiles
import { FIELD_TYPES } from '../../../../utiles/helpers';

const FormFields = (props) => {
    const {
        // Component props
        attr,
        form,
        onChange,
        // Formik props
        setFieldTouched
    } = props;
    const {
        dataType,
        isRequired,
        label
    } = form[attr];

    const handleChange = (event) => {
        setFieldTouched(attr);
        onChange(event);
    };

    const handleBlur = () => {
        setFieldTouched(attr);
    };

    const renderField = () => {
        if (dataType === FIELD_TYPES.STRING) {
            return (
                <TextField
                    name={attr}
                    label={label}
                    required={isRequired}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
            );
        }
        return null;
    };

    return (
        <div>{renderField()}</div>
    );
};

FormFields.propTypes = {
    attr: PropTypes.string.isRequired,
    form: PropTypes.shape({
        dataType: PropTypes.string,
        isRequired: PropTypes.string,
        label: PropTypes.string
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired
};

export default FormFields;
