import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import React, { useState } from 'react';

// Product Component
const Product = ({ product }) => {
  // Manage availability status and pop-up modal visibility
  const [isAvailable, setIsAvailable] = useState(product.isAvailable);
  const [showPopUp, setShowPopUp] = useState(false);

  // Toggle the availability status of the product
  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  // Show or hide the pop-up modal
  const handlePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Status: {isAvailable ? 'Available' : 'Out of Stock'}</p>

        <button onClick={handlePopUp}>
          {showPopUp ? 'Close Details' : 'View Details'}
        </button>
        <button onClick={toggleAvailability}>
          Toggle Availability
        </button>
      </div>

      {/* Pop-up Modal */}
      {showPopUp && (
        <div className="popup">
          <div className="popup-content">
            <h3>More Details about {product.name}</h3>
            <p>{product.detailedDescription}</p>
            <button onClick={handlePopUp}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Example usage of Product Component
const App = () => {
  const product = {
    name: 'Wireless Headphones',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQt6uaSVwADlpORamB2LzvaKHvgdxoIBiy8dilW3DdXzvlbL_QJiUP8rXpjErZuAY_MiNvkwL33IAi19SSFPFi3DyRzvjq1Cv10fba1YcOjEzCqMjYJsC_R',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 99.99,
    isAvailable: true,
    detailedDescription: 'These wireless headphones come with a built-in microphone, active noise cancellation, and 20 hours of battery life.',
  };

  return (
    <div>
      <h1>Product Page</h1>
      <Product product={product} />
    </div>
  );
};

export default App;
