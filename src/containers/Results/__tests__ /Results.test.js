// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import HomeLink from '../../../components/shared/links/HomeLink/HomeLink';
import Results from '../../../components/Results/Results';
import { ResultsContainer, mapStateToProps } from '../Results';

// @store
import { initialState as quiz } from '../../../store/reducers/quiz/quiz';

// @utils
import { questions as results } from '../../../utiles/testHelpers';

const setup = (propOptions) => {
    const props = {
        quiz,
        ...propOptions
    };

    const enzymeWrapper = shallow(<ResultsContainer {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('ResultsContainer component', () => {
    it('should render HomeLink', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(HomeLink)).toHaveLength(1);
    });


    it('should render Results', () => {
        const { enzymeWrapper } = setup({
            quiz: { ...quiz, results }
        });
        expect(enzymeWrapper.find(Results)).toHaveLength(1);
    });

    it('should handle mapStateToProps', () => {
        const state = { quiz };
        expect(mapStateToProps(state)).toEqual(state);
    });
});
