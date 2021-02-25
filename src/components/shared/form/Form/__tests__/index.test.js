// @vendors
import React from 'react';
import { shallow } from 'enzyme';
import { Formik } from 'formik';


// @components
import Form from '../form';

const setup = (propOptions) => {
    const props = {
        results: [{}],
        ...propOptions
    };

    const enzymeWrapper = shallow(<Form {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Form component', () => {
    it('should render Form', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(Formik)).toHaveLength(1);
    });
});
