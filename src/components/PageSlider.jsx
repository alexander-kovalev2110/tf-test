import React, { useState, useRef } from "react";

import Video from "../pages/Video";
import Introducing from "../pages/Introducing";
import VirtProd from "../pages/VirtProd";
import Text1 from "../pages/Text1";
import Text2 from "../pages/Text2";
import Text3 from "../pages/Text3";
import ProductSilos from "../pages/ProductSilos";
import Cabinet from "../pages/Cabinet";
import Sofa from "../pages/Sofa";
import Armchair from "../pages/Armchair";
import Instalation from "../pages/Instalation";
import Dimension from "../pages/Dimension";
import Lifestyle from "../pages/Lifestyle";
import CloseUp2 from "../pages/CloseUp2";

const pages = [
  <Video />,
  <Introducing />,
  <VirtProd />,
  <Text1 />,
  <Text2 />,
  <Text3 />,
  <ProductSilos />,
  <Cabinet />,
  <Sofa />,
  <Armchair />,
  <CloseUp2 />,
  <Lifestyle />,
  <Instalation />,
  <Dimension />,
];

const PageSlider = () => {
  const [page, setPage] = useState(0);    // Current page
  const [direction, setDirection] = useState(null);   // Direction of slide change
  const isDragging = useRef(false);       // Mouse button pressed state
  const initialY = useRef(0);             // Initial position on the Y axis
  const threshold = 20;                   // Threshold for switching to the new page

  const contentRef = useRef(null);

  const handleMouseDown = (event) => {      // MouseDown event
    isDragging.current = true;              // Enable mouse tracking
    initialY.current = event.clientY;
  };

  const handleMouseMove = (event) => {      // Mouse movement handling
    if (isDragging.current) {
      const deltaY = event.clientY - initialY.current;
      if (Math.abs(deltaY) > threshold) {
        if (deltaY > 0) {
          setPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));  // Next page
          setDirection("down");
        } else {
          setPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));  // Previous page
          setDirection("up");
        }
        isDragging.current = false;
      }
    }
  };

  const handleMouseUp = () => {         // MouseUp event
    isDragging.current = false;         // Mouse movement completed
  };

  const handleOnClick = () => {
    if (!isDragging.current) {
      setPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));
    }
  };

  return (
    <div 
      className="slider-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className={(direction === "up") ? "slide active slide-up prev" : "slide active slide-down"}>
        {pages[page]}
      </div>
    </div>
  );
}

export default PageSlider;
