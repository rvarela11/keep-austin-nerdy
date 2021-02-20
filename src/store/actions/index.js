export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function createRequestTypes(base) {
    if (!base) {
        throw new Error('cannot create request type with base = \'\' or base = null');
    }
    return [REQUEST, SUCCESS, FAILURE].reduce((accumulator, type) => {
        // eslint-disable-next-line no-param-reassign
        accumulator[type] = `${base}_${type}`;
        return accumulator;
    }, {});
}

export function createAction(type, payload = {}) {
    return {
        type,
        ...payload
    };
}
