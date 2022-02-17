import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import { playerReducer } from './playerReducer';
import { token } from './apiReducer';

const rootReducer = combineReducers({
  playerReducer,
  token,
  gameReducer,
});

export default rootReducer;
