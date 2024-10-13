import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsContainer = styled.section`
  padding: 10rem 2rem;
  background-color: #F8F8F8;
`;

const TestimonialsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialsTitle = styled(motion.h2)`
  font-size: 4rem;
  color: #FF4500;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;
`;

const TestimonialSlider = styled(motion.div)`
  display: flex;
  overflow-x: hidden;
  padding: 2rem 0;
`;

const TestimonialCard = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 3rem 2rem;
  margin: 0 1rem;
  min-width: 300px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #FF4500;
`;

const testimonials = [
  {
    text: "UR FAV Agency transformed our brand identity. Their creativity and attention to detail are unmatched!",
    author: "Jane Doe, CEO of TechStart"
  },
  {
    text: "Working with UR FAV was a game-changer for our company. They delivered beyond our expectations!",
    author: "John Smith, Marketing Director at InnovateCorp"
  },
  {
    text: "The team at UR FAV Agency is incredibly talented and professional. They brought our vision to life!",
    author: "Emily Brown, Founder of EcoLife"
  },
  {
    text: "UR FAV's innovative approach to design and marketing helped us stand out in a crowded market.",
    author: "Michael Johnson, CMO of FutureNow"
  }
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <TestimonialsContainer id="testimonials" ref={ref}>
      <TestimonialsContent>
        <TestimonialsTitle
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </TestimonialsTitle>
        <TestimonialSlider
          initial={{ x: '100%' }}
          animate={inView ? { x: '-100%' } : {}}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          }}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialSlider>
      </TestimonialsContent>
    </TestimonialsContainer>
  );
};

export default Testimonials;