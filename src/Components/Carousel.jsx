import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`carousel-img ${
            index === currentIndex ? 'slide-enter' : ''
          } ${index === (currentIndex === 0 ? images.length - 1 : currentIndex - 1) ? 'previous-slide' : ''}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
