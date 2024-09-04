import React from 'react';
import './PlantBasedFood.css';

const PlantBasedFood = () => {
  return (
    <div className="plant-based-container">
      <div className="image-text-container">
        <div className="image-section">
          <img 
            src="https://example.com/your-image.jpg" 
            alt="Plant-based food" 
            className="food-image" 
          />
        </div>
        <div className="text-section">
          <h2>All plants. <span className="italic-text">No animals.</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.</p>
        </div>
      </div>
    </div>
  );
};

export default PlantBasedFood;