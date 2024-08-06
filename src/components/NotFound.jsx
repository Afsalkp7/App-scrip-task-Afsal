import React from 'react';
import notFoundImage from '../assets/notFoundImage.png';

function NotFound() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      width: '100vw', 
    }}>
      <img 
        src={notFoundImage} 
        alt="not found" 
        style={{ 
          maxWidth: '100%', 
          height: 'auto' 
        }} 
      />
    </div>
  );
}

export default NotFound;
