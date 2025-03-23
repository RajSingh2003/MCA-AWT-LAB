// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import rideReducer from './features/rideSlice';

export const store = configureStore({
  reducer: {
    rides: rideReducer,
  },
});
