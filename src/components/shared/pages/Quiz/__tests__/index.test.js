// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Quiz from '../Quiz';
import QuizContainer from '../../../../../containers/Quiz/Quiz';

const setup = (propOptions) => {
    const props = {
        history: {},
        ...propOptions
    };

    const enzymeWrapper = shallow(<Quiz {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Quiz component', () => {
    it('should render Quiz', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(QuizContainer)).toHaveLength(1);
    });
});
