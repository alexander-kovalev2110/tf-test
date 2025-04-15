import React from 'react';
import { motion } from "framer-motion";

const Lifestyle = () => {
  return (
    <div style={{ overflow: "hidden", position: "relative", width: "100vw", height: "100vh" }}>
      <motion.img 
        src="lifestyle.jpg"
        initial={{ scale: 2.5}}   // Initial scale (enlarged image)
        animate={{ scale: 1 }}    // Final scale (normal size)
        transition={{ duration: 5, ease: "easeInOut" }} // Smooth animation in 5 sec
        style={{
          position: "relative",
          width: "100%", 
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
