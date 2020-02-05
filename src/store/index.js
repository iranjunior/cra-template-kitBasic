import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import history from '../routes/history';
import example from './ducks/example';

const reducers = combineReducers({
  example,
  route: connectRouter(history),
});


const middlewares = [routerMiddleware(history)];

const store = createStore(
  connectRouter(history)(reducers),
  applyMiddleware(...middlewares),
);

export default store;
