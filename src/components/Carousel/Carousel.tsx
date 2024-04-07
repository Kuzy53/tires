// @ts-nocheck
import React from 'react';
import './Carousel.css'; 

const Carousel = ({ children }) => {
 return (
    <div className="carousel">
      <div className="carousel-inner">
        {children}
      </div>
    </div>
 );
};

export default Carousel;
