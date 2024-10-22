import { ADD_EVENT, DELETE_EVENT, EDIT_EVENT } from "./eventActions";

export const initialState = {
  events: [],
};

export default function eventReducer(state, action) {
  switch (action.type) {
    case ADD_EVENT:
      return { ...state, events: [...state.events, action.payload] };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case EDIT_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    default:
      return state;
  }
}
