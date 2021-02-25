// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Results from '../Results';

// @utils
import { generateResults } from '../../../utiles/testHelpers';

const setup = (propOptions) => {
    const props = {
        results: generateResults(1),
        ...propOptions
    };

    const enzymeWrapper = shallow(<Results {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Results component', () => {
    it('should render Results', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.results')).toHaveLength(1);
    });
});
