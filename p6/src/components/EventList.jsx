// src/components/EventList.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookEvent, cancelEvent } from '../redux/actions';

const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handleBookEvent = (eventId) => {
    dispatch(bookEvent(eventId));
  };

  const handleCancelEvent = (eventId) => {
    dispatch(cancelEvent(eventId));
  };

  const handleSelectEvent = (eventId) => {
    setSelectedEvent(eventId);
  };

  return (
    <div>
      <h2>Event List</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>Status: {event.available ? 'Available' : 'Booked'}</p>
          <button
            onClick={() => (event.available ? handleBookEvent(event.id) : handleCancelEvent(event.id))}
            disabled={!event.available && selectedEvent !== event.id}
          >
            {event.available ? 'Book Now' : 'Cancel Booking'}
          </button>
          <button onClick={() => handleSelectEvent(event.id)}>
            Select Event
          </button>
        </div>
      ))}
      {selectedEvent && <p>Event {selectedEvent} is selected.</p>}
    </div>
  );
};

export default EventList;
