import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,  // Track which step the user is on (1st, 2nd, etc.)
  formData: {
    name: '',
    email: '',
    phone: '',
    resume: ''
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step < 3) state.step++;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step--;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    }
  }
});

export const { nextStep, prevStep, setFormData } = formSlice.actions;
export default formSlice.reducer;
