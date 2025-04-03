import React from "react";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";
import "../index.css";

const VirtProd = () => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      {/* Main image */}
      <motion.span
        style={{ position: "relative", top: "-100px" }} 
        animate={{ color: ["#4b0082", "#f81c1c", "#4b0082"] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
      >
        <Typography variant="h1" fontWeight="bold" component="span">
          Virtual Product Photography
        </Typography>
      </motion.span>


      {/* Animated appearance of yellow-sofa */}
      <motion.img
        src="virtProdSofa.png"
        initial={{ y: "100vh" }}                // Initial position behind the screen
        animate={{ y: "calc(100vh - 630px)" }}  // Move to the center of the screen
        transition={{ duration: 1.2, delay: 0.8, ease: "linear" }}
        style={{
          position: "absolute",
          left: "0", 
          transform: "translateX(-50%)",
          width: "100%", 
        }}
      />
    </div>
  );
};

export default VirtProd;
