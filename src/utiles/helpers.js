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
