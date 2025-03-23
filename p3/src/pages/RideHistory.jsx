// src/pages/RideHistory.jsx
import { useSelector } from 'react-redux';

function RideHistory() {
  const { rideHistory } = useSelector((state) => state.rides);

  return (
    <div>
      <h1>Ride History</h1>
      {rideHistory.length > 0 ? (
        <ul>
          {rideHistory.map((ride, index) => (
            <li key={index}>
              <strong>Ride {index + 1}:</strong>
              <p>Origin: {ride.origin}</p>
              <p>Destination: {ride.destination}</p>
              <p>Time: {ride.time}</p>
              <p>Driver: {ride.driver}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No rides booked yet!</p>
      )}
    </div>
  );
}

export default RideHistory;
