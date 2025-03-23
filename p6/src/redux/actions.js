// src/redux/actions.js
export const BOOK_EVENT = 'BOOK_EVENT';
export const CANCEL_EVENT = 'CANCEL_EVENT';

export const bookEvent = (eventId) => ({
  type: BOOK_EVENT,
  payload: eventId,
});

export const cancelEvent = (eventId) => ({
  type: CANCEL_EVENT,
  payload: eventId,
});
