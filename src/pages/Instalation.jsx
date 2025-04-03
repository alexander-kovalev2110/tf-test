// import React, { useState } from "react";
import Gallery from "../components/Gallery"
import "../index.css";

const images = [
  "instalation1.jpg",
  "instalation2.jpg",
  "instalation3.jpg",
  "instalation4.jpg",
  "instalation5.jpg",
  "instalation6.jpg",
];

const Instalation = () => {
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
};

export default Instalation;
