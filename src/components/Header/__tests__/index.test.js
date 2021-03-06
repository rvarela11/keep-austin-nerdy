// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Header from '../Header';

const setup = (propOptions) => {
    const props = {
        ...propOptions
    };

    const enzymeWrapper = shallow(<Header {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Header component', () => {
    it('should render Header', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.header')).toHaveLength(1);
    });
});
