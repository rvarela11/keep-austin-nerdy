// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Card from '../Card';

const setup = (propOptions) => {
    const props = {
        children: <div>Card</div>,
        ...propOptions
    };

    const enzymeWrapper = shallow(<Card {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Card component', () => {
    it('should render Card', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.card')).toHaveLength(1);
    });
});
