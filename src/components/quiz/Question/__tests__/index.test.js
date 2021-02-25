// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Question from '../Question';

// @utils
import { generateResults } from '../../../../utiles/testHelpers';

const setup = (propOptions) => {
    const props = {
        answered: false,
        handleAnswer: jest.fn(),
        item: generateResults(1)[0],
        ...propOptions
    };

    const enzymeWrapper = shallow(<Question {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Question component', () => {
    it('should render Question', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.question')).toHaveLength(1);
    });
});
