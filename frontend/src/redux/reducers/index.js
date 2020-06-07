import { combineReducers } from 'redux';
import { RESET_STORE } from '../actionTypes.js';
import { slides } from './slides.js';

const appReducer = combineReducers({
  slides,
});

export default (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
}
