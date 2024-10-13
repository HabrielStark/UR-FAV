import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeartContainer = styled(motion.div)`
  width: 250px;
  height: 250px;
  margin-bottom: 2rem;
`;

const HeartSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const HeartLogo: React.FC = () => {
  return (
    <HeartContainer
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <HeartSVG viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {/* Heart shape */}
        <path
          d="M100 190C100 190 20 130 20 70C20 40 45 20 75 20C90 20 100 30 100 40C100 30 110 20 125 20C155 20 180 40 180 70C180 130 100 190 100 190Z"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
        {/* Left eye */}
        <rect x="60" y="70" width="20" height="60" rx="10" fill="#FF4500" />
        {/* Right eye */}
        <rect x="120" y="70" width="20" height="60" rx="10" fill="#FF4500" />
        {/* Left eyebrow */}
        <path
          d="M55 60 Q70 55 85 60"
          stroke="#FF4500"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right eyebrow */}
        <path
          d="M115 60 Q130 55 145 60"
          stroke="#FF4500"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </HeartSVG>
    </HeartContainer>
  );
};

export default HeartLogo;