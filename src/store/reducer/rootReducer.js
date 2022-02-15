import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer';
import { token } from './apiReducer';

const rootReducer = combineReducers({
  playerReducer,
  token,
});

export default rootReducer;
