import React, { useRef, useEffect } from "react";
import "../index.css";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
        .catch(err => console.warn("Autoplay blocked:", err));
    }
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
    }}>
      <video
        ref={videoRef}
        src="video-of-the-sunrise-in-the-dolomites-mount.mp4"
        muted
        onClick={handleVideoClick}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Video;
