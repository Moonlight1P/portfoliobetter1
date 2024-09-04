import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';


const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: #1F1F1F;
  color: #E1D7C6;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Roboto';
  margin-bottom: 1.5rem;
  color: #C147E9;
  opacity: 1;
  transition: opacity 1.5s ease-out;
  &.animate {
    opacity: 1;
  }
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  font-family: 'League spartan';
  color: #E1D7C6;
  text-align: justify;
  margin-bottom: 2rem;
  opacity: 1;
  transition: opacity 1.5s ease-out;
  &.animate {
    opacity: 1;
  }
`;
const AboutButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-family: 'League Spartan', sans-serif;
  color: #fff;
  background: #C147E9;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #A02D8C;
    transform: scale(1.05);
  }
`;

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
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
    <AboutSection ref={sectionRef} id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        I am passionate about leveraging technology to solve real-world problems.
        My academic journey has equipped me with a strong foundation in software development, 
        cybersecurity, and network analysis. I am enthusiastic about contributing to dynamic teams 
        and am ready to take on challenges in the evolving field of computer engineering.
      </AboutText>
      <AboutButton href="https://drive.google.com/file/d/1VcvSSsfmLAIe0Uw2iz4Frzb4ued0e8y8/view?usp=sharing" target="_blank">My Resume</AboutButton>
    </AboutSection>
  );
};

export default About;