// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @material-ui
import Button from '@material-ui/core/Button';

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

    it('should invoke shuffleAnswers when item updates', () => {
        const { enzymeWrapper } = setup();
        const item = generateResults(2)[1];
        const spy = jest.spyOn(enzymeWrapper.instance(), 'shuffleAnswers');
        enzymeWrapper.setProps({ item });
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should handle Button onClick', () => {
        const { enzymeWrapper, props } = setup();
        enzymeWrapper.find(Button).first().simulate('click');
        expect(props.handleAnswer).toHaveBeenCalledTimes(1);
    });
});
