import React, { useState } from "react";
import { Box, IconButton, Button } from "@mui/material";

const chairs = [
  "blue-armchair.png",
  "grey-armchair.png",
  "violet-armchair.png",
];

const fabrics = [
  { label: "Prints", image: "blue-fabric.png" },
  { label: "Leathers", image: "gray-fabric.png" },
  { label: "Embroidery", image: "violet-fabric.png" },
];

const ArmchairShowcase = () => {
  const [currentChair, setCurrentChair] = useState(chairs[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box display="flex" width="100vw" height="100vh" overflow="hidden">
      {/* Left side */}
      <Box
        width="53%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#ffffff"
        position="relative"
      >
        <img src={currentChair} style={{ width: "100%" }} />
      </Box>

      {/* Right side with drop down menu */}
      <Box
        width="47%"
        height="100%"
        position="relative"
        overflow="hidden"
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        {/* Image of a chair */}
        <img
          src={currentChair}
          style={{
            width: "100%",
            height: "110%",
            left: "20%",
            objectFit: "cover",
            position: "absolute",
            left: 0,
            top: 0,
            transform: "scale(2.2)",
          }}
        />

        {/* Dropdown menu */}
        <Box
          position="absolute"
          top={menuOpen ? "0px" : "-240px"}
          left="45%"
          width="55%"
          bgcolor="white"
          boxShadow={menuOpen ? 5 : 0}
          transition="top 0.6s ease"
          // style={{transform: "translateY(100%)",
          //   animation: "slideUp 1s ease-in-out"
          // }}
        >
          {fabrics.map((fabric, index) => (
            <Button
            key={index}
            fullWidth
            onClick={() => setCurrentChair(chairs[index])}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15px 20px",
              fontSize: "16px",
              textTransform: "none",
              color: "black",
              backgroundImage: `url(${fabric.image})`,
              backgroundSize: "140px 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
              minHeight: "80px",
            }}
          >
            {fabric.label}
          </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ArmchairShowcase;
