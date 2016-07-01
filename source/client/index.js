import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';
import configureStore from '../configure-store';
import createRoutes from '../routes';
import App from '../components/App';
import OtherPage from '../components/OtherPage';

// Add the reducer to your store on the `routing` key
const middleware = routerMiddleware(browserHistory)
const store = configureStore({}, [middleware]);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
history.listen(location => console.log('location changed to', location));

const routes = createRoutes(history);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);