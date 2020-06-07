import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import defaultReducer from './reducers';

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store = createStore(defaultReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}
