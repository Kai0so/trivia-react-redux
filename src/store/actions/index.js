export const ADD_DATA = 'ADD_DATA';
export const ADD_TOKEN = 'ADD_TOKEN';

export const actionData = (payload) => ({
  type: ADD_DATA,
  payload,
});

export const actionToken = (payload) => ({
  type: ADD_TOKEN,
  payload,
});
