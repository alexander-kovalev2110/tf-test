import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import "../index.css";

const Lifestyle = () => {
  // Preloading the Image
  const src = "lifestyle.jpg";
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setLoaded(true);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden", position: "relative", width: "100vw", height: "100vh" }}>
      { loaded && (
        <motion.img 
          src={imageSrc}
          initial={{ scale: 2.5}}   // Initial scale (enlarged image)
          animate={{ scale: 1 }}    // Final scale (normal size)
          transition={{ duration: 5, ease: "easeInOut", delay: 2 }} // Smooth animation in 5 sec
          style={{
            position: "absolute",
            top: 0,
            left: 0, 
            width: "100%", 
            height: "100%",
            filter: "brightness(80%)", // Darkening the image
          }}
        />
      )}
      <motion.img 
        src="lifestyle.jpg"
        initial={{ scale: 2.5}}   // Initial scale (enlarged image)
        animate={{ scale: 1 }}    // Final scale (normal size)
        transition={{ duration: 5, ease: "easeInOut", delay: 2 }} // Smooth animation in 5 sec
        style={{
          position: "absolute",
          top: 0,
          left: 0, 
          width: "100%", 
          height: "100%",
          filter: "brightness(80%)", // Darkening the image
        }}
      />

      {/* Text over image */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}          //Initial state: invisible, 100px lower
        animate={{ opacity: 1, y: 0 }}            // Smooth appearance
        transition={{ duration: 1.5, delay: 3 }}  // 3 sec delay before appearance
        style={{
          position: "absolute",
          top: "40%",
          left: "15%",
          color: "white",
          fontSize: "3.2rem",
          fontWeight: "bold",
        }}
      >
        Lifestyle Scenes
      </motion.div>
    </div>
  );
}

export default Lifestyle;
