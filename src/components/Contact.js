import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

/* Keyframes */
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const rotateIn = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: rotate(0);
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: #1F1F1F;                /*#282c34*/
  min-height: 80vh;
  max-width: 928px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #e1d7c6;
  font-family: 'Roboto';
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeInUp} 1s ease-out, ${rotateIn} 1s ease-out;
    `}
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #e1d7c6;
  font-family: 'League spartan';
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  ${({ isVisible, delay }) =>
    isVisible &&
    css`
      animation: ${fadeInUp} 1s ease-out ${delay}s forwards, ${scaleIn} 1s ease-out ${delay}s forwards;
    `}
`;
const AboutButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-family: 'League Spartan';
  color: #fff;
  background: transparent;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  ${({ isVisible, delay }) =>
    isVisible &&
    css`
      animation: ${fadeInUp} 1s ease-out ${delay}s forwards, ${scaleIn} 1s ease-out ${delay}s forwards;
    `}
`;

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <Section id="contact" ref={sectionRef}>
      <Title isVisible={isVisible}>Contact Me</Title>
      <InfoText isVisible={isVisible} delay={0.5}>
        Email: pratyushmoon322@gmail.com
      </InfoText>
      <InfoText isVisible={isVisible} delay={1}>
        Phone: +91 9860255007
      </InfoText>
      <AboutButton isVisible={isVisible} delay={1.5} href="http://www.linkedin.com/in/pratyush-moon-64a55b2ba" target="_blank">Linkedin Profile</AboutButton>
    </Section>
  );
};

export default Contact;
