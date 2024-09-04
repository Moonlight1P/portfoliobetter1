import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

/* Keyframes */
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


const Section = styled.section`
  padding: 4rem 2rem;
  background: #282c34;
  min-height: 100vh;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'Roboto';
  margin-bottom: 2rem;
  opacity: 0;
  transition: opacity 1s ease-out;
  animation-delay: 0.5s;

  &.animate {
    animation: ${fadeInUp} 1s ease-out forwards;
  }
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

const CategoryContainer = styled.div`
  border: 2px solid #444;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  background-color: #333;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
  animation: ${fadeIn} 1.5s ease-out forwards;
  &:hover {
    transform: scale(1.05) translateY(0);
    box-shadow: 0 4px 8px rgba(227, 231, 9, 0.3);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-family: 'Open Sans';
  margin-bottom: 1rem;
  color: #C147E9;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
`;

const SkillItem = styled.li`
  font-size: 1.2rem;
  font-family: 'League spartan';
  margin: 1rem 0;
  background-color: #282c34;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: white;
  width: calc(33.333% - 1rem);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
  animation: ${fadeIn} 1.5s ease-out forwards;
  &:hover {
    transform: scale(1.05) translateY(0);
    box-shadow: 0 4px 8px rgba(227, 231, 9, 0.3);
  }
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: calc(50% - 1rem);
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Skills = () => {
  const skills = [
    { name: 'Java', category: 'Backend' },
    { name: 'Python', category: 'Machine Learning' },
    { name: 'React', category: 'Frontend' },
    { name: 'Javascript', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'Git', category: 'Tools' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'Flask', category: 'Backend' },
    { name: 'SQL', category: 'Database' },
    { name: 'Nmap', category: 'Tools' },
    { name: 'Burpsuite', category: 'Tools' },
  ];

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
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
      const items = section.querySelectorAll('.skill-item');
      items.forEach((item, index) => {
        observer.observe(item);
        item.style.animationDelay = `${index * 0.2}s`; // Stagger the animation delay
      });
    }

    return () => {
      if (section) {
        observer.disconnect();
      }
    };
  }, []);

  // Categorize skills
  const categories = {
    Frontend: [],
    Backend: [],
    'Machine Learning': [],
    Tools: [],
    Database: [],
  };

  skills.forEach((skill) => {
    categories[skill.category].push(skill);
  });

  return (
    <Section ref={sectionRef} id="skills">
      <Container>
        <Title className="animate">My Skills</Title>
        {Object.keys(categories).map((category, index) => (
          <CategoryContainer key={index}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillsList>
              {categories[category].map((skill, index) => (
                <SkillItem key={index} className="skill-item" delay={index * 0.2}>
                  {skill.name}
                </SkillItem>
              ))}
            </SkillsList>
          </CategoryContainer>
        ))}
      </Container>
    </Section>
  );
};

export default Skills;
