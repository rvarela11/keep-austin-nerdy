// @vendors
import React from 'react';
import { shallow } from 'enzyme';
import { Formik } from 'formik';

// @components
import Form from '../form';

// @json
const results = require('../../../../../../public/formData.json');

const setup = (propOptions) => {
    const props = {
        onSave: jest.fn(),
        results,
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

    it('should handle onSubmit', () => {
        const { enzymeWrapper, props } = setup();
        const FormikProps = enzymeWrapper.find(Formik).props();
        FormikProps.onSubmit();
        expect(props.onSave).toHaveBeenCalled();
    });
});
