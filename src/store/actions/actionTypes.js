import { createRequestTypes } from './index';

// Form Actions
export const GET_FORM_DATA = createRequestTypes('GET_FORM_DATA');

// Quiz Actions
export const GET_QUESTIONS = createRequestTypes('GET_QUESTIONS');
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const GRADE = 'GRADE';
