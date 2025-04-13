import React, { useEffect, useState } from 'react';

// Displaying Image with its preliminary loading
const LoadedImg = ({ src, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setLoaded(true);
    };
  }, [src]);

  return (
    <>
      {loaded && (
        <img
          src={imageSrc}
          className={className}
        />
      )}
    </>
  );
};

export default LoadedImg;
