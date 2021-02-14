export const FIELD_TYPES = {
    BOOLEAN: 'boolean',
    DATETIME: 'dateTime',
    INTEGER: 'integer',
    REFERENCE: 'reference',
    STRING: 'string'
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
