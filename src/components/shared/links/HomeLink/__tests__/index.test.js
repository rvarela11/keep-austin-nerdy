// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import HomeLink from '../HomeLink';

const setup = (propOptions) => {
    const props = {
        ...propOptions
    };

    const enzymeWrapper = shallow(<HomeLink {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('HomeLink component', () => {
    it('should render HomeLink', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.button-link')).toHaveLength(1);
    });
});
