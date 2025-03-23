// src/pages/BookRide.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookRide } from '../features/rideSlice';
import { useNavigate } from 'react-router-dom';

function BookRide() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [time, setTime] = useState('');
  const [driver, setDriver] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookRide({ origin, destination, time, driver }));
    navigate('/ride-history');
  };

  return (
    <div>
      <h1>Book a Ride</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Origin</label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Driver</label>
          <input
            type="text"
            value={driver}
            onChange={(e) => setDriver(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Ride</button>
      </form>
    </div>
  );
}

export default BookRide;
