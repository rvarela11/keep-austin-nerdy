/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

// @material-ui
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import HomeLink from '../shared/links/HomeLink/HomeLink';

// @styles
import './Results.scss';

const Results = ({ results }) => (
    <div className="results">
        {
            results.map((item, index) => {
                const { correct_answer, question } = item;
                const count = index + 1;
                return (
                    <div>
                        <div
                            className={className(
                                'results__number',
                                { 'results__number-double': (count > 9) }
                            )}
                        >
                            <Typography variant="body2">{`${count}.`}</Typography>
                        </div>
                        <div className="results__q-and-a">
                            <Typography variant="body2">{question}</Typography>
                            <Typography className="results__answer" variant="body2">{correct_answer}</Typography>
                        </div>
                    </div>
                );
            })
        }
        <CardActions className="card-actions">
            <HomeLink label="Restart" />
        </CardActions>
    </div>
);

Results.propTypes = {
    results: PropTypes.array.isRequired
};

export default Results;
