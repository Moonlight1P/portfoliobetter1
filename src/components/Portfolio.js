import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import ProfileImage1 from '../Assets/imageme.png';

// Keyframes for animations
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const HomeSection = styled.section`
  padding: 4rem 2rem;
  background: #282c34;
  min-height: 100vh;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;

  &.animate {
    animation: ${fadeInUp} 1.5s ease-out forwards;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: 2rem;
  width: 30%;
  color: #E1D7C6;

  &.animate {
    animation: ${fadeInUp} 1.5s ease-out forwards;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  padding-bottom: 10px;
  margin-bottom: 1rem;
  font-family: 'Roboto';
  font-style: italic;
  justify-content: center;
  text-align: center;
  color: #C147E9;
  position: relative;
  overflow: hidden;

  span {
    display: inline-block;
    position: relative;
    color: #F78764;
    animation: ${fadeInUp} 2s ease-out forwards;
  }
`;

const Subtitle = styled.h2`
  font-size: 30px;
  margin-bottom: 1rem;
  font-family: 'League spartan';
  color: #E1D7C6;
  animation: ${fadeInUp} 2s ease-out forwards;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
  max-height: 500px;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;

  &.animate {
    animation: ${scaleIn} 1.5s ease-out forwards;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(227, 231, 9, 0.3);
`;

const Portfolio = () => {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const imageContainerElement = imageContainerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    if (imageContainerElement) {
      observer.observe(imageContainerElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      if (imageContainerElement) {
        observer.unobserve(imageContainerElement);
      }
    };
  }, []);

  return (
    <HomeSection id="portfolio" ref={sectionRef}>
      <Container>
        <TextContainer>
          <Title>Welcome to My Port<span>folio</span></Title>
          <Subtitle>I'm Pratyush Moon</Subtitle>
        </TextContainer>
        <ImageContainer ref={imageContainerRef}>
          <ProfileImage src={ProfileImage1} alt="Pratyush Moon" />
        </ImageContainer>
      </Container>
    </HomeSection>
  );
};

export default Portfolio;







