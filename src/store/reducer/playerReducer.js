import { ADD_EMAIL } from '../actions';

export const INITIAL_STATE = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    fravatarEmail: '',
  },
};

export const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};
