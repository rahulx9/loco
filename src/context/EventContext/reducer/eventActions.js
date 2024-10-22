export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";

export const addEvent = (payload) => ({
  type: ADD_EVENT,
  payload: payload,
});

export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  payload: id,
});

export const editEvent = (payload) => ({
  type: EDIT_EVENT,
  payload: payload,
});
