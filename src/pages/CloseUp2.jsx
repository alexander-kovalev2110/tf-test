import { useState } from "react";
import { IconButton } from "@mui/material";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import CloseIcon from "@mui/icons-material/Close";
import "../index.css";

const CloseUp2 = () => {
  const [isZoomed, setIsZoomed] = useState(false);  // Turning zoom mode on and off
  const [position, setPosition] = useState(0);      // Initial position below the screen

  const handleZoomToggle = () => {
    setIsZoomed(true);    // Turn on zoom mode
    setPosition(50);      // Animation start position
  };

  const handleWheel = (event) => {
    setPosition((prev) => {
      let newPosition = prev - event.deltaY * 0.5;       // Change position
      return Math.max(-3150, Math.min(50, newPosition)); // Limiting the range of position changes
    });
  };

  return (
    <div className="image-container">
      {/* Zoom button*/}
      {!isZoomed ? (
        <>
          <img src="closeUp2.png" className="background-image" />
          
          <div className="closeup-button" onClick={handleZoomToggle}>
            Take a Closer Look
            <IconButton className="icon-button">
              <ZoomOutMapIcon />
            </IconButton>
          </div>
        </>
      ) : (
        <div className="zoomed-container" onWheel={handleWheel}>
          {/* Background (image) */}
          <div className="background-overlay"></div>
    
          {/* Top image */}
          <div className="hover-container">
            <img 
              src="closeUpHover.png" 
              className="hover-image" 
              style={{ transform: `translateY(${position}px)` }} 
            />
    
            {/* Close button */}
            <IconButton className="close-button" onClick={() => setIsZoomed(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloseUp2;
