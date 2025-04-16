import React from 'react';
import { motion } from "framer-motion";

const Lifestyle = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div style={{ overflow: "hidden", position: "relative", width: "100vw", height: "100vh" }}>
      <motion.img 
        src="lifestyle.jpg"
        initial={{ scale: 2.5}}                           // Initial scale (enlarged image)
        animate={isLoaded ? { scale: 1 } : {}}            // Final scale (normal size)
        transition={{ duration: 5, ease: "easeInOut" }}   // Smooth animation in 5 sec
        onLoad={() => setIsLoaded(true)}
        style={{
          position: "relative",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%", 
          objectFit: "cover",
          filter: "brightness(80%)",   // Darkening the image
          willChange: "transform",     // Animation optimization
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
