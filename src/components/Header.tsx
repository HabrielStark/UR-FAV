import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  );

  return (
    <HeaderContainer style={{ backgroundColor: headerBackground }}>
      <Logo>UR FAV</Logo>
      <Nav>
        <NavLink href="#home" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Home
        </NavLink>
        <NavLink href="#about" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          About
        </NavLink>
        <NavLink href="#work" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Work
        </NavLink>
        <NavLink href="#contact" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Contact
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;