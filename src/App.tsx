import React from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const AppContainer = styled.div`
  overflow-x: hidden;
`;

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <AppContainer>
        <AnimatedBackground />
        <Header />
        <Hero />
        <About />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </AppContainer>
    </ParallaxProvider>
  );
};

export default App;