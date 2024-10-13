import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPalette, FaCode, FaMobileAlt, FaMegaport, FaChartLine, FaCamera } from 'react-icons/fa';

const ServicesContainer = styled.section`
  padding: 10rem 2rem;
  background-color: #FFFFFF;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesTitle = styled(motion.h2)`
  font-size: 4rem;
  color: #FF4500;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const ServiceItem = styled(motion.div)`
  background-color: #F8F8F8;
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 4rem;
  color: #FF4500;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  color: #333333;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666666;
`;

const services = [
  {
    icon: <FaPalette />,
    title: 'Branding & Identity',
    description: 'We craft unique brand identities that resonate with your audience and leave a lasting impression.',
  },
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Our expert developers build responsive, high-performance websites tailored to your needs.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Design',
    description: 'We create intuitive and engaging mobile app interfaces that users love to interact with.',
  },
  {
    icon: <FaMegaport />,
    title: 'Digital Marketing',
    description: 'Our strategic marketing campaigns help you reach and engage your target audience effectively.',
  },
  {
    icon: <FaChartLine />,
    title: 'SEO Optimization',
    description: 'We improve your online visibility and drive organic traffic through advanced SEO techniques.',
  },
  {
    icon: <FaCamera />,
    title: 'Content Creation',
    description: 'Our creative team produces high-quality, engaging content that tells your brand\'s story.',
  },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ServicesContainer id="services" ref={ref}>
      <ServicesContent>
        <ServicesTitle
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </ServicesTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceItem>
          ))}
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;