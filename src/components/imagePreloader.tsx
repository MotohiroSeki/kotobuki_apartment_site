import React from 'react';
import useImagePreloader from 'src/controller/useImagePreloader';

interface PreloaderProps {
  imageSources: string[]
  children: React.ReactNode
}

const Preloader: React.FC<PreloaderProps> = ({ imageSources, children }) => {
  const imagesPreloaded = useImagePreloader(imageSources);

  if (!imagesPreloaded) {
    return <div>Loading...</div>
  }

  return <>{children}</>
};

export default Preloader