import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer';
import { token } from './apiReducer';
import { gameReducer } from './gameReducer';

const rootReducer = combineReducers({
  playerReducer,
  token,
  gameReducer,
});

export default rootReducer;
