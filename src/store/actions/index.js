export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_TOKEN = 'ADD_TOKEN';

export const actionEmail = (payload) => ({
  type: ADD_EMAIL,
  payload,
});

export const actionToken = (payload) => ({
  type: ADD_TOKEN,
  payload,
});
