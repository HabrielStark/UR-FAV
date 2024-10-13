import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.section`
  padding: 10rem 2rem;
  background-color: #FFFFFF;
  color: #333333;
  position: relative;
  overflow: hidden;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled(motion.h2)`
  font-size: 4rem;
  color: #FF4500;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const AboutText = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const AboutCard = styled(motion.div)`
  background-color: #F8F8F8;
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  color: #FF4500;
  margin-bottom: 1.5rem;
`;

const CardText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AboutContainer id="about" ref={ref}>
      <AboutContent>
        <AboutTitle
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Us
        </AboutTitle>
        <AboutText
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At UR FAV Agency, we're not just another creative team – we're your partners in bringing extraordinary ideas to life. With a perfect blend of innovation, passion, and expertise, we transform concepts into captivating realities.
        </AboutText>
        <AboutGrid>
          {['Creativity', 'Innovation', 'Passion'].map((item, index) => (
            <AboutCard
              key={item}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <CardTitle>{item}</CardTitle>
              <CardText>We infuse every project with boundless {item.toLowerCase()}, ensuring that each creation stands out and leaves a lasting impression on your audience.</CardText>
            </AboutCard>
          ))}
        </AboutGrid>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;