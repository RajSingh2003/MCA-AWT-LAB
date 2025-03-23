// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// src/App.jsx
import React from 'react';
import PostList from './components/PostList';
 import './assets/styles.css';
//import './App.css'

const App = () => {
  return (
    <div className="app">
      <h1>Social Media Dashboard</h1>
      <PostList />
    </div>
  );
};

export default App;
