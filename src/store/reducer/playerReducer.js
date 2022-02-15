import { ADD_DATA } from '../actions';

export const INITIAL_STATE = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
};

export const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_DATA:
    return {
      ...state,
      gravatarEmail: action.payload.email,
      name: action.payload.name,
      score: 0,
    };
  default:
    return state;
  }
};
