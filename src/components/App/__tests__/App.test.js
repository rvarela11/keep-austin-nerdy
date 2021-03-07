// @vendors
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// @components
import App from '../App';

// @store
import { initialState } from '../../../store/reducers/form/form';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
    form: { ...initialState }
});

const setup = (propOptions) => {
    const props = {
        ...propOptions
    };

    const enzymeWrapper = mount(
        <Provider store={store}>
            <App {...props} />
        </Provider>
    );

    return {
        props,
        enzymeWrapper
    };
};

describe('App component', () => {
    it('should render App', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.App')).toHaveLength(1);
    });
});
