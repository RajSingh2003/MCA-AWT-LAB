// src/features/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  userData: {
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    resume: null,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    updateUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    saveProgress: (state, action) => {
      // Save progress, could be saving data to localStorage or an API
      localStorage.setItem('userData', JSON.stringify(state.userData));
    },
  },
});

export const { nextStep, prevStep, updateUserData, saveProgress } = formSlice.actions;

export default formSlice.reducer;
