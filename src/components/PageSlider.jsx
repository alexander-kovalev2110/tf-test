import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

import Video from "../pages/Video";
import Introducing from "../pages/Introducing";
import VirtProd from "../pages/VirtProd";
import VirtProdSofa from "../pages/VirtProdSofa";
import Sofa1 from "../pages/Sofa1";
import Sofa2 from "../pages/Sofa2";
import Sofa3 from "../pages/Sofa3";
import Sofa4 from "../pages/Sofa4";
import ProductSilos from "../pages/ProductSilos";
import Sofa6 from "../pages/Sofa6";
import Sofa from "../pages/Sofa";
import Armchair from "../pages/Armchair";
import Instalation from "../pages/Instalation";
import Dimension from "../pages/Dimension";
import Lifestyle from "../pages/Lifestyle";
import CloseUp1 from "../pages/CloseUp1";
import CloseUp2a from "../pages/CloseUp2a";
import CloseUp2 from "../pages/CloseUp2";
import CloseUp3 from "../pages/CloseUp3";

const pages = [
  <Video />,
  <Introducing />,
  <VirtProd />,
  // <VirtProdSofa />,
  // <Sofa1 />,
  <Sofa2 />,
  <Sofa3 />,
  <Sofa4 />,
  <ProductSilos />,
  <Sofa6 />,
  <Sofa />,
  <Armchair />,
  // <CloseUp1 />,
  <CloseUp2 />,
  // <CloseUp3 />,
  <Lifestyle/>,
  <Instalation />,
  <Dimension />,
];

export default function PageSlider() {
  const [page, setPage] = useState(0);    // Current page
  const [direction, setDirection] = useState(null); // Direction of slide change
  const isDragging = useRef(false);       // Mouse button pressed state
  const initialY = useRef(0);             // Initial position on the Y axis
  const threshold = 20;                   // Threshold for switching to the next page

  const contentRef = useRef(null);

  const handleMouseDown = (event) => {      // MouseDown event
    isDragging.current = true;
    initialY.current = event.clientY;
  };

  const handleMouseMove = (event) => {      // Mouse movement handling
    if (isDragging.current) {
      const deltaY = event.clientY - initialY.current;
      if (Math.abs(deltaY) > threshold) {
        if (deltaY > 0) {
          setPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
          setDirection("down");
        } else {
          setPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));
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
      <div className="slide active slide-up">
        {pages[page]}
      </div>
    </div>
  );
}
