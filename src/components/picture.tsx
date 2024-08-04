import React, { useState, useEffect } from 'react';

const ImageWithPlaceholder = ({ src, alt }:{src:string, alt:string}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!isLoaded && (
        <img
          src="loading_img.svg"
          alt="placeholder"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{ display: isLoaded ? 'block' : 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ImageWithPlaceholder;