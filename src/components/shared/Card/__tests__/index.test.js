// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @material-ui
import { CardHeader, CardActions } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

// @components
import Card from '../Card';

const setup = (propOptions) => {
    const props = {
        children: <div>Card</div>,
        ...propOptions
    };

    const enzymeWrapper = shallow(<Card {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Card component', () => {
    it('should render Card', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.card')).toHaveLength(1);
    });

    it('should display CircularProgress', () => {
        const { enzymeWrapper } = setup({
            isFetching: true
        });
        expect(enzymeWrapper.find(CircularProgress)).toHaveLength(1);
    });

    it('should display error', () => {
        const { enzymeWrapper } = setup({
            error: { statusText: 'error' }
        });
        expect(enzymeWrapper.find('.error')).toHaveLength(1);
    });

    it('should display Avatar', () => {
        const { enzymeWrapper } = setup({
            avatar_message: 'test'
        });
        expect(enzymeWrapper.find(CardHeader).props()).toHaveProperty('avatar');
    });

    it('should display CardActions', () => {
        const { enzymeWrapper } = setup({
            actions: <div>Test</div>
        });
        expect(enzymeWrapper.find(CardActions)).toHaveLength(1);
    });
});
