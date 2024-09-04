import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// Common Section Style
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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

const EducationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const EducationItem = styled.li`
  background-color: #333;
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);  /*0 6px 16px rgba(0, 0, 0, 0.5)*/
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
  animation: ${fadeIn} 1.5s ease-out forwards;
  &:hover {
    transform: scale(1.05) translateY(0);
    box-shadow: 0 4px 8px rgba(227, 231, 9, 0.3);
  }
  h3 {
    margin-bottom: 0.5rem;
    font-family: 'League spartan';
    font-size: 1.75rem;
  }
  h4 {
    margin-bottom: 0.5rem;
    font-family: 'League spartan';
    font-size: 1.5rem;
    color: #E0E0E0;
  }
  p {
    font-size: 1.1rem;
    font-family: 'League spartan';
    color: #E0E0E0;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  span {
    display: block;
    font-family: 'League spartan';
    font-size: 1rem;
    color: #A0A0A0;
    margin-bottom: 1rem;
  }
`;

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const education = educationRef.current;
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
      { threshold: 0.1 }
    );

    if (education) {
      observer.observe(education);
    }

    return () => {
      if (education) {
        observer.unobserve(education);
      }
    };
  }, []);

  return (
    <Section ref={educationRef} id="education">
      <Container>
        <Title>Education</Title>
        <EducationList>
          <EducationItem className="animate">
            <h3>Ramrao Adik Institute of Technology</h3>
            <h4>BTech in Computer Engineering</h4>
            <span>2021 - 2025</span>
            <p>This course focuses on computer systems, software engineering, cybersecurity, and networking. It equips students with the skills to design, develop, and manage computing systems and applications.</p>
          </EducationItem>
          <EducationItem className="animate">
            <h3>Narayana Junior College</h3>
            <h4>Higher Secondary Education</h4>
            <span>2019 - 2021</span>
            <p>A foundational course in science, focusing on subjects like Physics, Chemistry, and Mathematics. It provides the essential knowledge required for engineering and technology studies.</p>
          </EducationItem>
          <EducationItem className="animate">
            <h3>Hiranandani Foundation School</h3>
            <h4>Secondary School</h4>
            <span>2008 - 2019</span>
            <p>Completed my class 10 education at Hiranandani Foundation School,Powai,Mumbai, where I studied Science with Computer Application.</p>
          </EducationItem>
          {/* Add more education items as needed */}
        </EducationList>
      </Container>
    </Section>
  );
};

export default Education;
