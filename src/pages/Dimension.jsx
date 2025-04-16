// import React, { useState } from "react";
import Gallery from "../components/Gallery"
import "../index.css";

const images = [
  "dimen1.jpg",
  "dimen2.jpg",
  "dimen3.jpg", 
  "dimen4.jpg",
  "dimen5.jpg",
  "dimen6.jpg",
];

const Dimension = () => {
  return (
    <div>
      <Gallery  images={images} />
    </div>
  );
};

export default Dimension;
