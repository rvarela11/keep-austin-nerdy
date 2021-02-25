// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Results from '../Results';
import ResultsContainer from '../../../../../containers/Results/Results';

const setup = (propOptions) => {
    const props = {
        history: {},
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
        expect(enzymeWrapper.find(ResultsContainer)).toHaveLength(1);
    });
});
