import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const CloseUp1 = () => {
  return (
    <motion.div
      className="container"
      // initial={{ y: 0 }}
      initial={{ y: "0"}}
      animate={{ y: "0vh" }} // Поднимаем на половину высоты экрана
      transition={{ duration: 10, ease: "easeInOut" }}
    >
      <img src="closeUp2.png" className="background-image" />
    </motion.div>
  );
}

export default CloseUp1;
