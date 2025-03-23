// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// src/App.jsx
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import BookRide from './pages/BookRide';
import RideHistory from './pages/RideHistory';
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book-ride">Book Ride</Link></li>
            <li><Link to="/ride-history">Ride History</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-ride" element={<BookRide />} />
          <Route path="/ride-history" element={<RideHistory />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
