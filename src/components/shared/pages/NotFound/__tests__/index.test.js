// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import NotFound from '../NotFound';

const setup = (propOptions) => {
    const props = {
        ...propOptions
    };

    const enzymeWrapper = shallow(<NotFound {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('NotFound component', () => {
    it('should render NotFound', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.not-found')).toHaveLength(1);
    });
});
