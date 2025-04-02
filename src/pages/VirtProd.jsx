import React from "react";
import { motion } from "framer-motion";
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
      }}
    >
      {/* Основное изображение */}
      <motion.img 
        src="virtProd.png" 
        alt="Virtual Product"
        style={{ width: "100%", display: "block"}}
      />

      {/* Анимированное появление yellow-sofa */}
      <motion.img
        src="yellow-sofa.png"
        alt="Yellow Sofa"
        initial={{ y: "100vh", opacity: 1 }} // Начальное положение за экраном
        animate={{ y: "calc(100vh - 600px)", opacity: 1 }} // Выезд к центру экрана
        transition={{ duration: 1.2, delay: 0.8, ease: "linear" }}
        style={{
          position: "absolute",
          left: "0", // Центрируем по горизонтали
          transform: "translateX(-50%)", // Сдвигаем на 50% для точного центрирования
          width: "100%", // Настроить размер
        }}
      />
    </div>
  );
};

export default VirtProd;
