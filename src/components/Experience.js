import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #1F1F1F;
  min-height: 50vh;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'Roboto';
  margin-bottom: 2rem;
  color: #C147E9;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ExperienceCard = styled.div`
  background: #333;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);  /*0 6px 16px rgba(0, 0, 0, 0.5)*/
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
  animation: ${fadeIn} 1.5s ease-out forwards;
  &:hover {
    transform: scale(1.05) translateY(0);
    box-shadow: 0 4px 8px rgba(227, 231, 9, 0.3);
  }
  color: white;
`;

const Position = styled.h3`
  margin-bottom: 1rem;
  font-family: 'Roboto';
  color: #C147E9;
`;

const Company = styled.p`
  margin-bottom: 0.5rem;
  font-family: 'League spartan';
  font-size: 1.2rem;
  color: #E1D7C6;
`;

const Duration = styled.p`
  margin-bottom: 1rem;
  font-family: 'League spartan';
  color: white;
`;
const AboutInternship = styled.p`
  font-family: 'League spartan';
`;

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate'); // Reset animation when out of view
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <Section ref={sectionRef} id="experience">
      <Container>
        <Title>My Experience</Title>
        <ExperienceCard>
          <Position>Data Analyst Intern</Position>
          <Company>LTIMindtree</Company>
          <Duration>February 2024 - April 2024</Duration>
          <AboutInternship><p>I learnt to analyze and manage data with Snowflake, a widely used tool in the industry for managing organizational data.
             Completed tasks such as caching data to reduce memory consumption and billing for each query. Also learned about RBAC, timestamps, and more.</p>
          </AboutInternship>
        </ExperienceCard>
      </Container>
    </Section>
  );
};

export default Experience;