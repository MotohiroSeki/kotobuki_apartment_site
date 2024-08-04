import React, { useState } from 'react';

const ImageWithPlaceholder = ({ src, alt }: {src:string, alt:string}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div>
      {!isLoaded && <img src='loading_img.svg' alt="placeholder" />}
      <img
        src={src}
        alt={alt}
        style={{ display: isLoaded ? 'block' : 'none' }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageWithPlaceholder;