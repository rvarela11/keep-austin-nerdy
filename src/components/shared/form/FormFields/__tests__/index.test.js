// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @material-ui
import TextField from '@material-ui/core/TextField';

// @components
import FormFields from '../FormFields';

const setup = (propOptions) => {
    const props = {
        attr: 'test',
        form: {
            test: {
                dataType: 'string',
                label: 'Test',
                options: [
                    {
                        label: 'A',
                        value: 'a'
                    }
                ],
                readOnly: false,
                required: false
            }
        },
        onChange: jest.fn(),
        setFieldTouched: jest.fn(),
        value: 'Test',
        ...propOptions
    };

    const enzymeWrapper = shallow(<FormFields {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('FormFields component', () => {
    it('should render FormFields', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(TextField)).toHaveLength(1);
    });
});
