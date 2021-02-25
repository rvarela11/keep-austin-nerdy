// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Home from '../Home';
import FormContainer from '../../../../../containers/Form/Form';

const setup = (propOptions) => {
    const props = {
        history: {},
        ...propOptions
    };

    const enzymeWrapper = shallow(<Home {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Home component', () => {
    it('should render Home', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(FormContainer)).toHaveLength(1);
    });
});
