// @vendors
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// @components
import Header from '../Header/Header';
import Home from '../shared/pages/Home/Home';
import Quiz from '../shared/pages/Quiz/Quiz';
import Results from '../shared/pages/Results/Results';
import NotFound from '../shared/pages/NotFound/NotFound';

// @styles
import './App.scss';

// @utiles
import * as routes from '../../utiles/routes';

const App = () => (
    <div className="App">
        <Router basename={routes.BASE_ROUTE}>
            <Header />
            <Switch>
                <Route exact path={routes.HOME_ROUTE} component={Home} />
                <Route exact path={routes.QUIZ_ROUTE} component={Quiz} />
                <Route exact path={routes.RESULTS_ROUTE} component={Results} />
                <Route exact path={routes.NOT_FOUND_ROUTE} component={NotFound} />
                <Redirect to={routes.NOT_FOUND_ROUTE} />
            </Switch>
        </Router>
    </div>
);

export default App;
