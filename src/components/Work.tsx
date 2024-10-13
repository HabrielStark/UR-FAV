import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkContainer = styled.section`
  padding: 10rem 2rem;
  background-color: #F8F8F8;
`;

const WorkContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const WorkTitle = styled(motion.h2)`
  font-size: 4rem;
  color: #FF4500;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const WorkItem = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const WorkInfo = styled.div`
  padding: 2rem;
`;

const WorkItemTitle = styled.h3`
  font-size: 1.8rem;
  color: #FF4500;
  margin-bottom: 1rem;
`;

const WorkItemDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333333;
`;

const workItems = [
  {
    title: 'Vibrant Branding',
    description: 'A stunning brand identity for a tech startup that captures their innovative spirit.',
    image: 'https://source.unsplash.com/random/800x600?branding',
  },
  {
    title: 'Immersive Web Experience',
    description: 'An award-winning website design that takes users on a journey through art and culture.',
    image: 'https://source.unsplash.com/random/800x600?website',
  },
  {
    title: 'Revolutionary App Design',
    description: 'A sleek and intuitive mobile app interface for a groundbreaking fitness tracking solution.',
    image: 'https://source.unsplash.com/random/800x600?app',
  },
  {
    title: 'Engaging Social Media Campaign',
    description: 'A viral social media campaign that significantly increased brand awareness and user engagement.',
    image: 'https://source.unsplash.com/random/800x600?social-media',
  },
];

const Work: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <WorkContainer id="work" ref={ref}>
      <WorkContent>
        <WorkTitle
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Work
        </WorkTitle>
        <WorkGrid>
          {workItems.map((item, index) => (
            <WorkItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <WorkImage src={item.image} alt={item.title} />
              <WorkInfo>
                <WorkItemTitle>{item.title}</WorkItemTitle>
                <WorkItemDescription>{item.description}</WorkItemDescription>
              </WorkInfo>
            </WorkItem>
          ))}
        </WorkGrid>
      </WorkContent>
    </WorkContainer>
  );
};

export default Work;