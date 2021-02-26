// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// @material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// @containers
import Root from './components/App/App';

// @reducers
import rootReducer from './store/reducers/index';

// @utiles
import { setViewportHeight } from './utiles/helpers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// Set Material-UI theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#81d4fa'
        }
    },
    typography: {
        useNextVariants: true
    }
});

// Set viewport height
setViewportHeight();

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Root />
    </MuiThemeProvider>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
