// @vendors
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// @components
import FormContainer from '../Form';
import Form from '../../../components/shared/form/Form/form';

// @store
import { initialState } from '../../../store/reducers/form/form';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
    form: initialState
});

const setup = (propOptions) => {
    const props = {
        getFormDataAction: jest.fn(),
        getQuestionsAction: jest.fn(),
        history: { replace: () => {} },
        ...propOptions
    };

    const enzymeWrapper = mount(
        <Provider store={store}>
            <FormContainer {...props} />
        </Provider>
    );

    return {
        props,
        enzymeWrapper
    };
};

describe('FormContainer component', () => {
    it('should render FormContainer', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(Form)).toHaveLength(1);
    });
});
