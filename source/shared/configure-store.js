import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import reducers from './reducers';

const logger = createLogger();
const rootReducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer,
}));

const configureStore = (initialState = {}, extraMiddlewares = []) => compose(
  applyMiddleware(thunkMiddleware, logger, ...extraMiddlewares)
)(createStore)(rootReducer, initialState);

export default configureStore;
