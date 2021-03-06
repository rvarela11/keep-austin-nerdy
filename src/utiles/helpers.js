// @vendors
import _ from 'lodash';

export const generateOptions = data => data.map(item => ({
    label: item.name,
    value: item.id
}));

export const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const isTest = () => {
    try {
        return !process.env.NODE_ENV || process.env.NODE_ENV === 'test';
    } catch (e) {
        return false;
    }
};

export function logErrorToConsole(error) {
    if (!isTest()) console.error(_.get(error, 'response.data.errors[0].title', error));
}
