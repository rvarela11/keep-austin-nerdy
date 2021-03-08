// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Form from '../../../components/shared/form/Form/form';
import { FormContainer, mapDispatchToProps, mapStateToProps } from '../Form';

// @store
import { initialState as form } from '../../../store/reducers/form/form';

const setup = (propOptions) => {
    const props = {
        form,
        getFormDataAction: jest.fn(),
        getQuestionsAction: jest.fn(),
        history: { replace: jest.fn() },
        ...propOptions
    };

    const enzymeWrapper = shallow(<FormContainer {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('FormContainer component', () => {
    it('should render Form', () => {
        const { enzymeWrapper, props } = setup();
        expect(props.getFormDataAction).toHaveBeenCalled();
        expect(enzymeWrapper.find(Form)).toHaveLength(1);
    });

    it('should invoke handleOnSave', () => {
        const { enzymeWrapper, props } = setup();
        const FormProps = enzymeWrapper.find(Form).props();
        FormProps.onSave();
        expect(props.getQuestionsAction).toHaveBeenCalled();
        expect(props.history.replace).toHaveBeenCalled();
    });

    it('should handle mapDispatchToProps', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        const expected = JSON.stringify(() => {});
        expect(props.getFormDataAction()).toEqual(expected);
        expect(props.getQuestionsAction()).toEqual(expected);
    });

    it('should handle mapStateToProps', () => {
        const state = { form };
        expect(mapStateToProps(state)).toEqual(state);
    });
});
