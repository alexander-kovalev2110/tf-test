import React, { useEffect, useRef } from 'react';

const Introducing = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Text scaling animation
    if (textRef.current) {
      textRef.current.style.animation = 'scaleDownText 7s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Background Video (HTML) */}
      <video
        autoPlay
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
          zIndex: 0,
        }}
      >
        <source src="video-of-the-sunrise-in-the-dolomites-mount.mp4" type="video/mp4" />
      </video>
    
      <style>
        {`
          @keyframes scaleDownText {
            0% { transform: scale(20); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      {/* SVG with mask and text (over video) */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100% 100%"
        style={{ position: 'absolute', zIndex: 1 }}
      >
        {/* Background (except text) */}
        <mask id="darken-bg">
          <rect width="100%" height="100%" fill="white" />
          <text
            ref={textRef}
            x="50%"
            y="50%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="160"
            fontFamily='sans-serif'
            fontWeight="bold"
            fill="black" // Cuts text from a mask
            style={{
              transformOrigin: 'center',
              animation: 'scaleDownText 7s  cubic-bezier(0.4, 0, 0.2, 1) forwards'
            }}
          >
            Introducing
          </text>
        </mask>
        <rect
          width="100%"
          height="100%"
          fill="#f8f7f7"
          mask="url(#darken-bg)"
        />
      </svg>
    </div>
  );
};

export default Introducing;