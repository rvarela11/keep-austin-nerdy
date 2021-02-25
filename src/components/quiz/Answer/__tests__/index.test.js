// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @material-ui
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

// @components
import Answer from '../Answer';

const setup = (propOptions) => {
    const props = {
        answer: '',
        isAnswerCorrect: false,
        ...propOptions
    };

    const enzymeWrapper = shallow(<Answer {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Answer component', () => {
    it('should render Answer', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.answer')).toHaveLength(1);
    });

    it('should render CancelOutlinedIcon', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(CancelOutlinedIcon)).toHaveLength(1);
    });

    it('should render CheckCircleOutlinedIcon', () => {
        const { enzymeWrapper } = setup({
            isAnswerCorrect: true
        });
        expect(enzymeWrapper.find(CheckCircleOutlinedIcon)).toHaveLength(1);
    });
});
