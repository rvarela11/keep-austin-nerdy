// @vendors
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// @components
import Header from '../Header/Header';
import Home from '../shared/pages/Home/Home';

// @styles
import './App.scss';

const App = () => (
    <div className="App">
        <Header />
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    </div>
);

export default App;
