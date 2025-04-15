import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Typography, Modal, Paper, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';

const ProductSilos = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgWidths, setImgWidths] = useState([]);
  const galleryRef = useRef(null);
  const imgRefs = useRef([]);

  const handleOpen = () => {
    setCurrentIndex(0);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const handleNext = () => setCurrentIndex((prev) => (prev < 4 ? prev + 1 : prev));
  const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));

  useEffect(() => {
    if (open && imgRefs.current.length > 0) {
      const widths = imgRefs.current.map(ref => ref?.offsetWidth || 0);
      setImgWidths(widths);
    }
  }, [open, currentIndex]);

  const handleGalleryClick = (e) => {
    if (!galleryRef.current) return;
    
    const galleryRect = galleryRef.current.getBoundingClientRect();
    const clickX = e.clientX - galleryRect.left;
    const galleryWidth = galleryRect.width;
    
    // Define the visible area
    const visibleStart = currentIndex * (imgWidths[currentIndex] + 20);
    const visibleEnd = visibleStart + galleryWidth;

    // Check if there are hidden parts on the left
    if (clickX < galleryWidth * 0.2 && currentIndex > 0) {
      handlePrev();
    } 
    // Check if there are hidden parts on the right
    else if (clickX > galleryWidth * 0.8 && currentIndex < images.length - 1) {
      handleNext();
    }
  };

  const images = ["silo1.png", "silo2.png", "silo3.png", "silo4.png", "silo1.png"];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="100vh"
      padding="5%"
      bgcolor="#f5f5f5"
    >
      {/* Left side with text*/}
      <Box sx={{ position: "relative", left: "4%", top: "-7%" }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(to right, indigo, red)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Product Silos
        </Typography>

        <Button
          color="primary"
          onClick={handleOpen}
          sx={{ 
            mt: 3, 
            padding: "0 35px",
            height: "50px",
            border: "2px solid indigo",
            borderRadius: "30px",
            color: "indigo", 
            backgroundColor: "transparent", 
            textTransform: "none",
            '&:hover': { backgroundColor: "indigo", color: "white" }  
          }}
        >
          <span style={{ fontSize: "1.7em" }}>+</span>&nbsp;&nbsp;&nbsp;&nbsp;Take a closer look
        </Button>
      </Box>

      {/* Right side with image */}
      <motion.img
        src="silo.jpg"
        style={{ width: "60%", height: "auto", borderRadius: "20px", transform: "scale(0.8)" }}
      />

      {/* Modal window */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          '& .MuiBackdrop-root': { backgroundColor: 'rgba(0, 0, 0, 0.3)' }
        }}
      >
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: open ? -50 : '100vh' }}
          transition={{ type: "spring", damping: 25, stiffness: 100 }}
          style={{
            width: "80%",
            maxWidth: "900px",
            height: "75vh",
            position: 'relative'
          }}
        >
          <Paper
            sx={{
              height: '100%',
              p: 4,
              pt: 6,
              borderRadius: "20px",
              boxShadow: 24,
              overflow: "hidden",
              position: 'relative',
              backgroundColor: '#f8f4ff',
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 25,
                top: 16,
                backgroundColor: "indigo",
                color: "white",
                '&:hover': { backgroundColor: "rgba(75, 0, 130, 0.7)" }
              }}
            >
              <CloseIcon />
            </IconButton>

            <Typography 
              variant="h5"
              sx={{
                color: "indigo",
                maxWidth: "70%",
                margin: "40px 0 0 15%",
                fontWeight: 500,
                textAlign: "left",
              }}
            >
              Ultra-high-definition images of your furniture 
              shot from different angles.
            </Typography>

            {/* Gallery with horizontal navigation by clicking on an incompletely displayed image */}
            <Box 
              ref={galleryRef}
              onClick={handleGalleryClick}
              sx={{
                position: 'relative',
                width: '100%',
                height: '70%',
                top: "10%",
                overflow: 'hidden',
                borderRadius: '12px',
                margin: '0 auto',
                transform: 'scale(0.8)',
                transformOrigin: 'center top',
                cursor: 'pointer'
              }}
            >
              <motion.div
                style={{
                  display: 'flex',
                  height: '100%',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '0 15px',
                  x: `-${currentIndex * (imgWidths[currentIndex] + 20)}px`
                }}
                transition={{ type: 'tween', duration: 0.5 }}
              >
                {images.map((img, index) => (
                  <Box 
                    key={index}
                    ref={el => imgRefs.current[index] = el}
                    sx={{
                      flexShrink: 0,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                  >
                    <motion.img
                      src={img}
                      style={{
                        height: '100%',
                        width: 'auto',
                        maxWidth: 'none',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                ))}
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Modal>
    </Box>
  );
};

export default ProductSilos;
