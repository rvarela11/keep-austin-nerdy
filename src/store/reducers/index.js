import { combineReducers } from 'redux';

import form from './form/form';
import quiz from './quiz/quiz';

const rootReducer = combineReducers({
    form,
    quiz
});

export default rootReducer;
