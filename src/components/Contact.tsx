import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactContainer = styled.section`
  padding: 10rem 2rem;
  background: linear-gradient(135deg, #FF4500, #FF6347);
  color: #FFFFFF;
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormInput = styled.input`
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #FF4500;
  background-color: #FFFFFF;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #F8F8F8;
  }
`;

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactContainer id="contact" ref={ref}>
      <ContactContent>
        <ContactTitle
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </ContactTitle>
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FormInput
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormInput
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormTextarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;