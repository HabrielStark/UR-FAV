import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(
    -45deg,
    #ff9a9e,
    #fad0c4,
    #ffecd2,
    #fcb69f
  );
  background-size: 400% 400%;
  animation: ${moveBackground} 15s ease infinite;
`;

const AnimatedBackground: React.FC = () => {
  return <BackgroundContainer />;
};

export default AnimatedBackground;