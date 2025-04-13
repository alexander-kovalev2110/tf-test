import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LoadedImg from "./LoadedImg";
import "../index.css";

const Gallery = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState(null); // Direction of slide change

  const handleNext = () => {
    setPrevIndex(currentIndex);
    setDirection("up");       // New slide appears from bottom to top
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setPrevIndex(currentIndex);
    setDirection("down");     // New slide appears from top to bottom
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  return (
    <div className="slider-container">
      <div>
        {images.map((src, index) => {
            let className = "slide";
            if (index === currentIndex) {
              className += " active";
              className += direction === "down" ? " slide-down" : " slide-up";
            } else if (index === prevIndex) {
              className += " prev";
            }

            return (
              <LoadedImg src={src} className={className} />
            )
          })}
      </div>

      <IconButton       
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "400px",
          right: "40px",
          background: "transparent",
          border: "2px solid white",
          color: "white",
          width: "40px",
          height: "40px",
          zIndex: 2,
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "460px",
          right: "40px",
          background: "transparent",
          border: "2px solid white",
          color: "white",
          width: "40px",
          height: "40px",
          zIndex: 2,
        }}
      >
        <ArrowDownwardIcon />
      </IconButton>
    </div>
  );
};

export default Gallery;
