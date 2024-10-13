import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: var(--text-color);
  color: var(--background-color);
  padding: 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const FooterLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterLink = styled(motion.a)`
  color: var(--background-color);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const FooterCopyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>UR FAV</FooterLogo>
        <FooterLinks>
          <FooterLink href="#home" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Home
          </FooterLink>
          <FooterLink href="#about" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            About
          </FooterLink>
          <FooterLink href="#work" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Work
          </FooterLink>
          <FooterLink href="#contact" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Contact
          </FooterLink>
        </FooterLinks>
      </FooterContent>
      <FooterCopyright>
        &copy; {new Date().getFullYear()} UR FAV Agency. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;