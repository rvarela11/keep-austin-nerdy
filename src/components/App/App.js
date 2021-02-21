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

// @styles
import './App.scss';

// @utiles
import * as routes from '../../utiles/routes';

const App = () => (
    <div className="App">
        <Header />
        <Router>
            <Switch>
                <Route exact path={routes.BASE_ROUTE} component={Home} />
                <Route exact path={routes.QUIZ_ROUTE} component={Quiz} />
                <Redirect to={routes.NOT_FOUND_ROUTE} />
            </Switch>
        </Router>
    </div>
);

export default App;
