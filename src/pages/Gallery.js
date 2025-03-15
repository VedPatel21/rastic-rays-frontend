import React from 'react';
import './Gallery.css';

function Gallery() {
  // Sample images array – replace placeholder URLs with actual images as needed.
  const images = [
    'https://via.placeholder.com/600x400?text=Gallery+Image+1',
    'https://via.placeholder.com/600x400?text=Gallery+Image+2',
    'https://via.placeholder.com/600x400?text=Gallery+Image+3',
    'https://via.placeholder.com/600x400?text=Gallery+Image+4',
    'https://via.placeholder.com/600x400?text=Gallery+Image+5',
    'https://via.placeholder.com/600x400?text=Gallery+Image+6',
  ];

  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Rustic Rays ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
