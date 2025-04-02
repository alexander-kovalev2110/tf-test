import React, { useRef, useEffect } from "react";
import "../index.css";

const Video = () => {
// const Video = ({ setHasEnded, hasEnded }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
        .catch(err => console.warn("Autoplay blocked:", err));
    }
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
    // if (videoRef.current && !hasEnded) {
      videoRef.current.pause();
      // setHasEnded(true);
      console.log("Video clicked");
    }
  };

  const handleVideoEnd = () => {
    console.log("Video ended");
    // setHasEnded(true);
  };

  return (
    <div>
      <video
        ref={videoRef}
        src="video-of-the-sunrise-in-the-dolomites-mount.mp4"
        autoPlay
        muted
        playsInline
        onClick={handleVideoClick}
        onEnded={handleVideoEnd}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Video;
