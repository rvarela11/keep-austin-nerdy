// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @material-ui
import TextField from '@material-ui/core/TextField';

// @components
import FormFields from '../FormFields';

// @json
const testForm = require('../../../../../../public/formData.json');

const attr = 'type';
const { value } = testForm[0][attr];

const setup = (propOptions) => {
    const props = {
        attr,
        form: testForm[0],
        onChange: jest.fn(),
        setFieldTouched: jest.fn(),
        value,
        ...propOptions
    };

    const enzymeWrapper = shallow(<FormFields {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('FormFields component', () => {
    it('should render TextFild with select', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(TextField)).toHaveLength(1);
    });

    it('should render TextFild', () => {
        const { enzymeWrapper } = setup({ attr: 'category' });
        expect(enzymeWrapper.find(TextField)).toHaveLength(1);
    });

    it('should invoke handleBlur', () => {
        const { enzymeWrapper, props } = setup();
        enzymeWrapper.find(TextField).props().onBlur();
        expect(props.setFieldTouched).toHaveBeenCalledTimes(1);
    });

    it('should invoke handleChange', () => {
        const { enzymeWrapper, props } = setup();
        enzymeWrapper.find(TextField).props().onChange();
        expect(props.setFieldTouched).toHaveBeenCalledTimes(1);
        expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    it('should render null', () => {
        const form = testForm[0];
        form[attr].dataType = 'boolean';
        const { enzymeWrapper } = setup({ form });
        expect(enzymeWrapper.find(TextField)).toHaveLength(0);
    });
});
