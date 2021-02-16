// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

// @utiles
import { DATA_TYPES, FIELD_TYPES } from '../../../../utiles/helpers';

// @styles
import './FormFields.scss';

const FormFields = (props) => {
    const {
        // Component props
        attr,
        error,
        form,
        onChange,
        value,
        // Formik props
        setFieldTouched
    } = props;
    const {
        dataType,
        label,
        options,
        readOnly,
        required
    } = form[attr];

    const handleChange = (event) => {
        setFieldTouched(attr);
        onChange(event);
    };

    const handleBlur = () => {
        setFieldTouched(attr);
    };

    const renderField = () => {
        if (dataType === DATA_TYPES.STRING || dataType === DATA_TYPES.INTEGER) {
            const textFieldProps = {
                name: attr,
                label,
                disabled: readOnly,
                error,
                onBlur: handleBlur,
                onChange: handleChange,
                required,
                type: FIELD_TYPES[dataType],
                value
            };

            if (options && options.length > 0) {
                return (
                    <TextField {...textFieldProps} select>
                        {
                            options.map(item => (
                                <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                            ))
                        }
                    </TextField>
                );
            }

            return (
                <TextField {...textFieldProps} />
            );
        }
        return null;
    };

    return (
        <>{renderField()}</>
    );
};

FormFields.propTypes = {
    attr: PropTypes.string.isRequired,
    error: PropTypes.bool,
    form: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired
};

FormFields.defaultProps = {
    error: false
};

export default FormFields;
