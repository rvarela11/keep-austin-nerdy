// @vendors
import * as Yup from 'yup';

export const DATA_TYPES = {
    BOOLEAN: 'boolean',
    INTEGER: 'integer',
    STRING: 'string'
};

export const FIELD_TYPES = {
    boolean: 'boolean',
    integer: 'number',
    string: 'string'
};

export const generateValues = (form) => {
    let values = {};
    if (form.length > 0) {
        values = Object.entries(form[0])
            .reduce((result, [key, value]) => ({
                ...result,
                [key]: value.value
            }), {});
    }
    return values;
};

export const generateOptions = data => data.map(item => ({
    label: item.name,
    value: item.id
}));

export const submitModelForm = (values, props) => props.onSave(values);

export const validateSchema = (form) => {
    let schema = {};
    if (form.length > 0) {
        schema = Object.entries(form[0])
            .reduce((result, [key, params]) => {
                const { dataType, required } = params;

                if (!FIELD_TYPES[dataType]) {
                    return { ...result };
                }

                let validator = Yup[FIELD_TYPES[dataType]]();

                if (required) {
                    validator = validator.required('validation.required');
                }

                return {
                    ...result,
                    [key]: validator
                };
            }, {});
    }
    return Yup.object().shape(schema);
};
