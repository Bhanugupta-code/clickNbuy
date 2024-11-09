import React, { useState } from 'react';
import imageData from './data.json'; // Adjust the path as necessary

const Popup = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {imageData.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.title}
            onClick={() => handleImageClick(image)}
            style={{ cursor: 'pointer', margin: '10px', width: '100px', height: '100px' }} // Adjust styles as needed
          />
        ))}
      </div>
      {selectedImage && (
        <div className="popup" onClick={closePopup} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={selectedImage.url} alt={selectedImage.title} style={{ maxWidth: '90%', maxHeight: '90%' }} />
            <p>{selectedImage.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
