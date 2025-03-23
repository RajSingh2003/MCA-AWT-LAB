// src/redux/reducer.js
import { BOOK_EVENT, CANCEL_EVENT } from './actions';

const initialState = {
  events: [
    { id: 1, name: 'Concert', available: true },
    { id: 2, name: 'Theater', available: true },
    { id: 3, name: 'Comedy Show', available: true },
  ],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload ? { ...event, available: false } : event
        ),
      };
    case CANCEL_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload ? { ...event, available: true } : event
        ),
      };
    default:
      return state;
  }
};

export default eventReducer;
