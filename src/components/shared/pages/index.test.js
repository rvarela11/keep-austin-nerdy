// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Page from './Page';

const setup = (propOptions) => {
    const props = {
        children: <div>Test</div>,
        ...propOptions
    };

    const enzymeWrapper = shallow(<Page {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Page component', () => {
    it('should render Page', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.page')).toHaveLength(1);
    });
});
