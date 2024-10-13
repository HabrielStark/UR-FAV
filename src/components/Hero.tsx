import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeartLogo from './HeartLogo';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #FF4500, #FF6347);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled(motion.div)`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 800px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  color: #FFFFFF;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 2rem;
  color: #FFFFFF;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #FFFFFF;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer id="home">
      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeartLogo />
        <HeroTitle>UR FAV Agency</HeroTitle>
        <HeroSubtitle>Bringing your wildest ideas to life with passion and creativity</HeroSubtitle>
      </HeroContent>
      <ScrollIndicator
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ↓
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;