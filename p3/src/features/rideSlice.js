// src/features/rideSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rideHistory: [],
  currentRide: {
    origin: '',
    destination: '',
    time: '',
    driver: '',
  },
};

const rideSlice = createSlice({
  name: 'rides',
  initialState,
  reducers: {
    bookRide: (state, action) => {
      state.currentRide = action.payload;
      state.rideHistory.push(action.payload);
    },
    updateCurrentRide: (state, action) => {
      state.currentRide = action.payload;
    },
  },
});

export const { bookRide, updateCurrentRide } = rideSlice.actions;

export default rideSlice.reducer;
