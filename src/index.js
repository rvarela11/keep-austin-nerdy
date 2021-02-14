// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// @containers
import Root from './components/App/App';

// @reducers
import rootReducer from './store/reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Setting the Material-UI theme
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
