// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // //import './App.css'

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { nextStep, prevStep, setFormData } from './formSlice';


// const App = () => {
//   const dispatch = useDispatch();
//   const { step, formData } = useSelector(state => state.form);
//   const [errors, setErrors] = useState({});
  
//   useEffect(() => {
//     // Clear errors when moving to a new step
//     setErrors({});
//   }, [step]);

//   const handleInputChange = (e) => {
//     dispatch(setFormData({ [e.target.name]: e.target.value }));
//   };

//   const validateStep = () => {
//     let validationErrors = {};
    
//     if (step === 1) {
//       if (!formData.name) validationErrors.name = "Name is required";
//       if (!formData.email) validationErrors.email = "Email is required";
//     }
//     if (step === 2) {
//       if (!formData.phone) validationErrors.phone = "Phone is required";
//     }
//     if (step === 3) {
//       if (!formData.resume) validationErrors.resume = "Resume is required";
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateStep()) {
//       dispatch(nextStep());
//     }
//   };

//   const handlePrevious = () => {
//     dispatch(prevStep());
//   };

//   return (
//     <div className="form-container">
//       <h2>Job Application</h2>
      
//       {step === 1 && (
//         <div>
//           <h3>Step 1: Personal Information</h3>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//           {errors.name && <span className="error">{errors.name}</span>}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//       )}
      
//       {step === 2 && (
//         <div>
//           <h3>Step 2: Contact Information</h3>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//           {errors.phone && <span className="error">{errors.phone}</span>}
//         </div>
//       )}

//       {step === 3 && (
//         <div>
//           <h3>Step 3: Upload Resume</h3>
//           <input
//             type="file"
//             name="resume"
//             onChange={(e) => dispatch(setFormData({ resume: e.target.files[0].name }))}
//           />
//           {errors.resume && <span className="error">{errors.resume}</span>}
//         </div>
//       )}

//       <div className="navigation">
//         {step > 1 && (
//           <button onClick={handlePrevious}>Previous</button>
//         )}
//         <button onClick={handleNext}>
//           {step === 3 ? 'Submit' : 'Next'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// src/App.jsx
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, prevStep, updateUserData, saveProgress } from './features/formSlice';
import { useState, useEffect } from 'react';
import './App.css'
function App() {
  const dispatch = useDispatch();
  const { step, userData } = useSelector((state) => state.form);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // On load, you can check if there's saved progress in localStorage
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
      dispatch(updateUserData(savedData));
    }
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserData({ [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (step === 1) {
      if (!userData.fullName) newErrors.fullName = 'Full name is required';
      if (!userData.email) newErrors.email = 'Email is required';
    }
    if (step === 2) {
      if (!userData.phone) newErrors.phone = 'Phone number is required';
    }
    if (step === 3) {
      if (!userData.experience) newErrors.experience = 'Experience is required';
    }
    return newErrors;
  };

  const handleSaveProgress = () => {
    dispatch(saveProgress());
  };

  const handleSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      if (step < 3) {
        dispatch(nextStep());
      } else {
        alert('Form submitted!');
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="App">
      <h1>Job Application Form</h1>
      <div>
        <form>
          {step === 1 && (
            <div>
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && <span>{errors.fullName}</span>}
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div>
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <span>{errors.phone}</span>}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div>
                <label>Experience</label>
                <textarea
                  name="experience"
                  value={userData.experience}
                  onChange={handleInputChange}
                />
                {errors.experience && <span>{errors.experience}</span>}
              </div>
            </div>
          )}
        </form>

        <div>
          <button onClick={() => dispatch(prevStep())}>Previous</button>
          <button onClick={handleSubmit}>{step < 3 ? 'Next' : 'Submit'}</button>
          <button onClick={handleSaveProgress}>Save Progress</button>
        </div>
      </div>
    </div>
  );
}

export default App;
