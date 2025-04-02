import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";

const sofas = [
  "orange-sofa.png",
  "violet-sofa.png",
  "yellow-sofa.png"
]

const Sofa = () => {
  const [currentSofa, setCurrentSofa] = useState(sofas[0]);

  return (
    <Box 
      display="flex" 
      width="100vw" 
      height="100vh" 
      overflow="hidden"
    >
      {/* Left side */}
      <Box
        width="50%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#ffffff"
        position="relative"
      >
        <img
          src={currentSofa}
          style={{ width: "90%" }}

        />

        {/* Button container */}
        <Box display="flex" position="absolute" bottom="2%" left="35%">
          {[
            { color: "DarkSalmon", sofa: sofas[0] },
            { color: "SlateBlue", sofa: sofas[1] },
            { color: "DarkSeaGreen", sofa: sofas[2] },
          ].map(({ color, sofa }, index) => (
            <IconButton key={index} onClick={() => setCurrentSofa(sofa)}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: color
                }}
              />
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Right side */}
      <Box
        width="50%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f0f3fa"
        position="relative"
      >
        <img src={currentSofa} style={{ 
          width: "80%", 
          objectFit: "contain", 
          transition: "transform 0.3s",
          transform: "scale(3) translateX(24%)",
          overflow: "hidden",
        }} />
      </Box>
    </Box>
  );
};

export default Sofa;
